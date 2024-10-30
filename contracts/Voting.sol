//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

import "hardhat/console.sol";


contract Voting {
  enum Candidates { BOB, ALICE }
  mapping(Candidates => uint256) public votes;
  mapping(address => bool) public voters;

  constructor() {
      votes[Candidates.BOB] = 1;
      votes[Candidates.ALICE] = 1;
      voters[0x8fA8016921a4Cd240433e8fA872b7750Ee3A66d9] = true;
      voters[0xA0FcD37Ce5AB17541d5D928fE153d8ea135b7ffB] = true;
  }

  function totalVotes() public view returns(uint256) {
    return votes[Candidates.BOB] + votes[Candidates.ALICE];
  }

  function vote(Candidates candidate) public {
    require(!voters[msg.sender], "You have already voted.");
    require(totalVotes() < 10, "The total number of votes is 10.");
    voters[msg.sender] = true;
    votes[candidate]++;
  }

  function winner() public view returns (Candidates) {
    require(totalVotes() == 10);
    if (votes[Candidates.BOB] > votes[Candidates.ALICE]) {
        return Candidates.BOB;
    } else {
        return Candidates.ALICE;
    }
  }
}
