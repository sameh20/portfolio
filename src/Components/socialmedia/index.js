import React from "react";
import axios from "axios";
import {
  Socialmedia,
  Social,
  SocialDesc,
  Span,
  Icon,
  SpanInfo,
} from "./style.js";

class SocialMedia extends React.Component {
  state = {
    social: [],
  };
  componentDidMount() {
    axios.get("js/Data.json").then((res) => {
      this.setState({ social: res.data.social });
    });
  }
  render() {
    const { social } = this.state;
    const socialList = social.map((socialItem) => {
      return (
        <Social item={socialItem.id} key={socialItem.id}>
          <Icon className={socialItem.icon}></Icon>
          <SocialDesc>
            <Span>{socialItem.title}</Span>
            <SpanInfo>{socialItem.body}</SpanInfo>
          </SocialDesc>
        </Social>
      );
    });
    return <Socialmedia>{socialList}</Socialmedia>;
  }
}
export default SocialMedia;
