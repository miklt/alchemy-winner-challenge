// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

// The goal is to call the target contract indirectly, for that I use
// an interface for the target method. Then, using the provided contract address,
// I call the method.
// After that I deploy the contract and then I call callAttempt() on the deployed contract.
interface X {
    function attempt() external;
}

contract Maluco {
    function callAttempt() public {
        X(address(0xcF469d3BEB3Fc24cEe979eFf83BE33ed50988502)).attempt();
    }
}
