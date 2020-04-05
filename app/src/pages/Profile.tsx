import React, { useState, useEffect, useCallback, useContext } from "react";
import styled from "styled-components";

import {
  CenteredFlexColumn,
  CenteredFlexRow
} from "../components/containers/Flex";
import { Like, LikeService } from "../services/LikeService";
import { TextArea } from "../components/form";
import { UserContext } from "./UserContext";

const Page = styled(CenteredFlexColumn)`
  width: 100%;
`;

const Title = styled.div`
  cursor: default;
  font-family: ${({ theme }) => theme.font.fancy};
  font-size: 2rem;
  margin-top: ${({ theme }) => theme.space[5]}px;
`;

const List = styled.div`
  margin-top: ${({ theme }) => theme.space[5]}px;
`;

const ListItem = styled.div`
  margin-top: ${({ theme }) => theme.space[1]}px;
`;

const ProfileBanner = styled(CenteredFlexRow)`
  width: 100%;
  margin-top: ${({ theme }) => theme.space[5]}px;
`;

const Avatar = styled(CenteredFlexRow)`
  background-color: #ef4d9b;
  border-radius: 50%;
  color: #fff;
  font-size: 15px;
  height: 30px;
  width: 30px;
`;

const Username = styled.span`
  margin-left: ${({ theme }) => theme.space[3]}px;
`;

const Profile: React.FunctionComponent<{}> = props => {
  const [likes, setLikes] = useState<Like[]>([]);
  const [input, setInput] = useState("");

  const userContext = useContext(UserContext);

  useEffect(() => {
    LikeService.getLikes()
      .then(list => setLikes(list))
      .catch(() => {});
  }, []);

  const onInputChange = useCallback(value => setInput(value), []);

  return (
    <Page>
      <Title>things i like</Title>
      <ProfileBanner>
        <Avatar>R</Avatar>
        <Username>{userContext.user?.username}</Username>
      </ProfileBanner>
      <TextArea
        placeholder="I like..."
        value={input}
        onChange={onInputChange}
      />
      <List>
        {likes.map(like => (
          <ListItem key={like.id}>{like.body}</ListItem>
        ))}
      </List>
    </Page>
  );
};

export default Profile;
