import { screen, render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import FollowersList from "../FollowersList";

const FollowersListWrapper = () => {
  return (
    <BrowserRouter>
      <FollowersList />
    </BrowserRouter>
  );
};

describe("FollowersList", () => {
  it("should render follower items", async () => {
    render(<FollowersListWrapper />);
    const followerDivElement = await screen.findByTestId("follower-item-0");
    expect(followerDivElement).toBeInTheDocument();
  });
  //   it("should contain all followers", async () => {
  //     render(<FollowersListWrapper />);
  //     const followerDivElements = await screen.findAllByTestId(/follower-item/);
  //     expect(followerDivElements.length).toBe(5);
  //   });
});
