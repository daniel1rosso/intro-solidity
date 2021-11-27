// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

contract RentalCar {
    address[16] public rentals;

    function rental(uint256 rentalId) public returns (uint256) {
        require(rentalId >= 0 && rentalId <= 15);
        rentals[rentalId] = msg.sender;
        return rentalId;
    }

    function getRentals() public view returns (address[16] memory) {
        return rentals;
    }

    function getRentalOf(uint256 rentalId) public view returns (address) {
        return rentals[rentalId];
    }
}