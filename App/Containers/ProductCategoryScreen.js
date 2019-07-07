import React, { Component } from "react";
import { BackHandler, TouchableOpacity } from "react-native";
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
  FooterTab,
  List,
  ListItem,
  Separator,
  Thumbnail
} from "native-base";
import { connect } from "react-redux";
// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from "./Styles/ProductCategoryScreenStyle";

class ProductCategoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listData: []
    };
  }
  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true;
    });
  }
  defaultListData = () => {
    const defaultData = [
      {
        index: "0",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Argriculture"
      },
      {
        index: "1",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Apparel"
      },
      {
        index: "2",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Babay"
      },
      {
        index: "3",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Bueaty & Personal Care"
      },
      {
        index: "4",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Chemicals"
      },
      {
        index: "5",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Construction & Real Estate"
      },
      {
        index: "6",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Consumer Electronics"
      },
      {
        index: "7",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Electrical Equipment & Supplies"
      },
      {
        index: "8",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Electronic Components & Supplies"
      },
      {
        index: "9",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Energy"
      },
      {
        index: "10",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Fashion Accessories"
      },
      {
        index: "11",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Food & Beverage"
      },
      {
        index: "12",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Furnitrue"
      },
      {
        index: "13",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Garden Supplies"
      },
      {
        index: "14",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Gifts & Crafts"
      },
      {
        index: "15",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Health & Medical"
      },
      {
        index: "16",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Home & Kitchen"
      },
      {
        index: "17",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Home Appliances"
      },
      {
        index: "18",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Lights & Lighting"
      },
      {
        index: "19",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Luggage, Bags & Cases"
      },
      {
        index: "20",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Machinery"
      },
      {
        index: "21",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Minerals & Metallurgy"
      },
      {
        index: "22",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Offices & School Supplies"
      },
      {
        index: "23",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Packaging & Printing"
      },
      {
        index: "24",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Pet Products"
      },
      {
        index: "25",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Rubber & Plastics"
      },
      {
        index: "26",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Security & Protection"
      },
      {
        index: "27",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Service Equipment"
      },
      {
        index: "28",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Shoes & Accessories"
      },
      {
        index: "29",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Sports & Entertainment"
      },
      {
        index: "30",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Telecommunications"
      },
      {
        index: "31",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Textiles & Leather Products"
      },
      {
        index: "32",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Timepieces, Jewelry, Eyewear"
      },
      {
        index: "33",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Tools & Hardware"
      },
      {
        index: "34",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Toys & Hobbies"
      },
      {
        index: "35",
        url:
          "https://sc01.alicdn.com/kf/HTB1YhGraMmH3KVjSZKzq6z2OXXab.jpg_100x100.jpg",
        title: "Vehical & Accessories"
      }
    ];
    return defaultData;
  };
  goSubCate = e =>
    this.props.navigation.navigate("ProductCategory", { cate: e });
  getcategories = data =>
    data.map((k, i) => (
      <touchableopacity onpress={() => this.gosubcate(k.title)} key={i}>
        <listitem avatar style={{ margintop: 10 }}>
          <thumbnail source={{ uri: k.url }} />
          <body>
            <text>{k.title}</text>
          </body>
        </listitem>
      </touchableopacity>
    ));
  render() {
    // const { listData } = this.state;
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent onPress={() => this.props.navigation.goBack()}>
              <Icon name="md-arrow-back" />
            </Button>
          </Left>
          <Body>
            <Title>Categories</Title>
          </Body>
          <Right />
        </Header>

        <Content>
          <Separator bordered>
            <Text>All Categories</Text>
          </Separator>
          {this.getCategories(this.defaultListData())}
        </Content>

        {/* <Footer> */}
        {/*   <FooterTab> */}
        {/*      <Button active full> */}
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
)(ProductCategoryScreen);
