import React, { Component } from "react";
import { BackHandler } from "react-native";
import {
  Content,
  Container,
  Header,
  Left,
  Right,
  Body,
  Button,
  Text,
  Title,
  Icon,
  Footer,
  FooterTab
} from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/PayLaterScreenStyle";

class PayLaterScreen extends Component {
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>PayLaterScreen</Title>
          </Body>
          <Right />
        </Header>

        <Content padder>
          <Text>PayLaterScreen Content</Text>
        </Content>

        {/* <Footer> */}
        {/*   <FooterTab> */}
        {/*     <Button active full> */}
        {/*       <Text>Footer</Text> */}
        {/*     </Button> */}
        {/*   </FooterTab> */}
        {/* </Footer> */}
      </Container>
    );
  }
}

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PayLaterScreen);
