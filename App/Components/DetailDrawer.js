import React, { Component } from "react";
// import PropTypes from 'prop-types';
import {
  View,
  Text,
  Left,
  Right,
  Icon,
  Card,
  CardItem,
  Body
} from "native-base";
import styles from "./Styles/DetailDrawerStyle";

export default class DetailDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  // // Prop type warnings
  // static propTypes = {
  //   someProperty: PropTypes.object,
  //   someSetting: PropTypes.bool.isRequired,
  // }
  //
  // // Defaults for props
  // static defaultProps = {
  //   someSetting: false
  // }
  render() {
    const { detail = {} } = this.props;

    return (
      <View style={styles.container}>
        <Card>
          <CardItem
            header
            button
            onPress={() => alert("This is Card Header")}
            bordered
          >
            <Left>
              <Text style={styles.tip}>Quick Details</Text>
            </Left>
            <Right>
              <Icon name="ios-more" />
            </Right>
          </CardItem>
          <CardItem onPress={() => alert("This is Card Header")}>
            <Body>
              <Text>
                {detail.parameter || "Descript Detail About Product Infomation"}
              </Text>
            </Body>
          </CardItem>
          {/* <CardItem footer button onPress={() => alert("This is Card Footer")}> */}
          {/*   <Left> */}
          {/*     <Text>4YRS</Text> */}
          {/*   </Left> */}
          {/*   <Right> */}
          {/*     <Text>Learn More</Text> */}
          {/*   </Right> */}
          {/* </CardItem> */}
        </Card>
      </View>
    );
  }
}
