import React, { useState } from "react";
import {
  Container,
  Paper,
  Typography,
  Checkbox,
  FormControlLabel,
  Button,
  Box,
  FormGroup,
  Divider
} from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";

const operations = [
  { value: "upgrade", label: "Upgrade Token" },
  { value: "downgrade", label: "Downgrade Token" },
  { value: "connect", label: "Connect Pool" },
  { value: "flow", label: "Create/Update/Delete Flows" },
  { value: "claim", label: "Claim All" },
];

const MacrosBuilder = () => {
  const [selectedOperations, setSelectedOperations] = useState([]);
  const [generatedCode, setGeneratedCode] = useState("");

  const handleOperationChange = (value) => {
    setSelectedOperations((prev) => {
      if (prev.includes(value)) {
        return prev.filter((op) => op !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const generateCode = () => {
    let code = `// SPDX-License-Identifier: AGPLv3
pragma solidity ^0.8.26;

import { ISuperfluid, BatchOperation, IConstantFlowAgreementV1, IGeneralDistributionAgreementV1, ISuperToken, ISuperfluidPool, IERC20 }
    from "@superfluid-finance/ethereum-contracts/contracts/interfaces/superfluid/ISuperfluid.sol";
import { SuperTokenV1Library } from "@superfluid-finance/ethereum-contracts/contracts/apps/SuperTokenV1Library.sol";
import { Math } from "@openzeppelin/contracts/utils/math/Math.sol";
import { IUserDefinedMacro } from "@superfluid-finance/ethereum-contracts/contracts/utils/MacroForwarder.sol";

using SuperTokenV1Library for ISuperToken;

contract CustomMacro is IUserDefinedMacro {

    function getParams(address superTokenAddr, ${getParamsArguments()})
        public pure returns (bytes memory)
    {
        return abi.encode(superTokenAddr, ${getParamsEncoding()});
    }

    function buildBatchOperations(ISuperfluid host, bytes memory params, address msgSender)
        external override view
        returns (ISuperfluid.Operation[] memory operations)
    {
        // parse params
        (address superTokenAddr,${getParamsArguments()}) =
            abi.decode(params, (address, ${getParamsTypes()}));

        // build batch operations
        operations = new ISuperfluid.Operation[](${selectedOperations.length});
        uint8 opsCnt = 0;

        ${generateOperations()}

        return operations;
    }
}`;

    setGeneratedCode(code);
  };

  const getParamsArguments = () => {
    // Logic to generate parameters based on selected operations
    let params = "";
    if (
      selectedOperations.includes("connect") ||
      selectedOperations.includes("claim")
    ) {
      params += "address poolAddr";
    }
    if (selectedOperations.includes("flow")) {
      params += `${params ? ", " : ""} address flowReceiver, int96 flowRate`;
    }
    if (selectedOperations.includes("upgrade")) {
      params += `${params ? ", " : ""} uint256 upgradeAmount`;
    }
    if (selectedOperations.includes("downgrade")) {
      params += `${params ? ", " : ""} uint256 downgradeAmount`;
    }
    return params;
  };

  const getParamsEncoding = () => {
    // Logic to generate parameter encoding based on selected operations
    let paramsEncoding = "";
    if (
      selectedOperations.includes("connect") ||
      selectedOperations.includes("claim")
    ) {
      paramsEncoding += "poolAddr";
    }
    if (selectedOperations.includes("flow")) {
      paramsEncoding += `${paramsEncoding ? ", " : ""}flowReceiver, flowRate`;
    }
    if (selectedOperations.includes("upgrade")) {
      paramsEncoding += `${paramsEncoding ? ", " : ""}upgradeAmount`;
    }
    if (selectedOperations.includes("downgrade")) {
      paramsEncoding += `${paramsEncoding ? ", " : ""}downgradeAmount`;
    }
    return paramsEncoding;
  };

  const getParamsTypes = () => {
    // Logic to generate parameter types based on selected operations
    let paramsTypes = "";
    if (
      selectedOperations.includes("connect") ||
      selectedOperations.includes("claim")
    ) {
      paramsTypes += "address";
    }
    if (selectedOperations.includes("flow")) {
      paramsTypes += `${paramsTypes ? ", " : ""}address, int96`;
    }
    if (selectedOperations.includes("upgrade")) {
      paramsTypes += `${paramsTypes ? ", " : ""}uint256`;
    }
    if (selectedOperations.includes("downgrade")) {
      paramsTypes += `${paramsTypes ? ", " : ""}uint256`;
    }
    return paramsTypes;
  };

  const generateOperations = () => {
    // Logic to generate operations based on selected operations
    let ops = "";
    if (selectedOperations.includes("claim")) {
      ops += `
        // op: claim all
        {
            IGeneralDistributionAgreementV1 gda = IGeneralDistributionAgreementV1(address(host.getAgreementClass(
                keccak256("org.superfluid-finance.agreements.GeneralDistributionAgreement.v1")
            )));
            operations[opsCnt++] = ISuperfluid.Operation({
                operationType : BatchOperation.OPERATION_TYPE_SUPERFLUID_CALL_AGREEMENT,
                target: address(gda),
                data: abi.encode(
                    abi.encodeCall(
                        gda.claimAll,
                        (
                            pool,
                            msgSender,
                            new bytes(0) // ctx
                        )
                    ), // calldata
                    new bytes(0) // userdata
                )
            });
        }`;
    }
    if (selectedOperations.includes("downgrade")) {
      ops += `
        // op: downgrade
        operations[opsCnt++] = ISuperfluid.Operation({
            operationType : BatchOperation.OPERATION_TYPE_SUPERTOKEN_DOWNGRADE,
            target: address(pool.superToken()),
            data: abi.encode(claimableBalance)
        });`;
    }
    return ops;
  };

  return (
    <Container color="black" maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="h4" gutterBottom>
          Superfluid Macro Builder
        </Typography>
        <Divider sx={{ mb: 3 }} />

        <Typography variant="h6" gutterBottom>
          Select Operations
        </Typography>

        <FormGroup color="black" sx={{ mb: 3 }}>
          {operations.map((op) => (
            <FormControlLabel
              key={op.value}
              control={
                <Checkbox
                  checked={selectedOperations.includes(op.value)}
                  onChange={() => handleOperationChange(op.value)}
                  color="primary"
                />
              }
              label={op.label}
            />
          ))}
        </FormGroup>

        <Box sx={{ mb: 3 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={generateCode}
            startIcon={<CodeIcon />}
            size="large"
          >
            Generate Macro
          </Button>
        </Box>

        {generatedCode && (
          <Box>
            <Typography variant="h6" gutterBottom>
              Generated Code
            </Typography>
            <Paper
              elevation={2}
              sx={{
                p: 2,
                backgroundColor: "#1e1e1e",
                color: "#fff",
                fontFamily: "monospace",
                overflow: "auto",
              }}
            >
              <pre style={{ margin: 0 }}>
                <code>{generatedCode}</code>
              </pre>
            </Paper>
          </Box>
        )}
      </Paper>
    </Container>
  );
};

export default MacrosBuilder;