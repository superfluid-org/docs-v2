import React, { useState } from 'react';
import { ethers } from 'ethers';
import { Button, Input, Box, Text, Flex, VStack, HStack, useToast } from '@chakra-ui/react';


export default function FlowManager() {
  const [tokenAddress, setTokenAddress] = useState('');
  const [receiver, setReceiver] = useState('');
  const [flowRate, setFlowRate] = useState('');
  const [walletConnected, setWalletConnected] = useState(false);
  const [account, setAccount] = useState('');
  const toast = useToast();

  const forwarderAddress = '0xcfA132E353cB4E398080B9700609bb008eceB125';
  const forwarderABI = []; // Insert the ABI here


  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        setWalletConnected(true);
        toast({
          title: 'Wallet connected',
          description: `Connected to ${address}`,
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
      } catch (error) {
        console.error('Failed to connect wallet:', error);
        toast({
          title: 'Connection failed',
          description: 'Failed to connect wallet. Please try again.',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
      }
    } else {
      toast({
        title: 'Metamask not detected',
        description: 'Please install Metamask to use this feature.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleFlow = async (action) => {
    if (!walletConnected) {
      toast({
        title: 'Wallet not connected',
        description: 'Please connect your wallet first.',
        status: 'warning',
        duration: 3000,
        isClosable: true,
      });
      return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();
    const contract = new ethers.Contract(forwarderAddress, forwarderABI, signer);

    try {
      let tx;
      switch (action) {
        case 'create':
          tx = await contract.createFlow(tokenAddress, account, receiver, flowRate, "0x");
          break;
        case 'update':
          tx = await contract.updateFlow(tokenAddress, account, receiver, flowRate, "0x");
          break;
        case 'delete':
          tx = await contract.deleteFlow(tokenAddress, account, receiver, "0x");
          break;
      }
      await tx.wait();
      toast({
        title: 'Transaction successful',
        description: `Flow ${action}d successfully!`,
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    } catch (error) {
      console.error(`Error ${action}ing flow:`, error);
      toast({
        title: 'Transaction failed',
        description: `Failed to ${action} flow. Please try again.`,
        status: 'error',
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="500px" margin="auto" padding="20px">
      <VStack spacing={4} align="stretch">
        <Text fontSize="2xl" fontWeight="bold" textAlign="center">Flow Manager</Text>
        
        {!walletConnected ? (
          <Button colorScheme="blue" onClick={connectWallet}>Connect Wallet</Button>
        ) : (
          <Text>Connected: {account}</Text>
        )}
        
        <Input
          placeholder="Token Address"
          value={tokenAddress}
          onChange={(e) => setTokenAddress(e.target.value)}
        />
        <Input
          placeholder="Receiver Address"
          value={receiver}
          onChange={(e) => setReceiver(e.target.value)}
        />
        <Input
          placeholder="Flow Rate"
          value={flowRate}
          onChange={(e) => setFlowRate(e.target.value)}
        />
        
        <HStack spacing={4}>
          <Button colorScheme="green" onClick={() => handleFlow('create')} flex={1}>Create Flow</Button>
          <Button colorScheme="yellow" onClick={() => handleFlow('update')} flex={1}>Update Flow</Button>
          <Button colorScheme="red" onClick={() => handleFlow('delete')} flex={1}>Delete Flow</Button>
        </HStack>
      </VStack>
    </Box>
  );
}