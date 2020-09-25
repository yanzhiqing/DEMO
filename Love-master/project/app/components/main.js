import React, { Component } from 'react'
import {TouchableOpacity,ScrollView,Image,Text,View,StyleSheet} from "react-native"

export default class MainComponent extends Component {

    //跳转到路由地址为list的页面
    jump=()=>{
      this.props.navigation.push("ProductList")
    }
  
  render() {
    return <ScrollView  style={myStyle.content}>

      {/*第一行*/}
      <View  style={myStyle.row}>
        {/*实现第一列*/}
        <View style={myStyle.col1}>
         <Text style={myStyle.redColor}>200</Text>
         <Text style={myStyle.size}>当日PC端PV量</Text>
        </View>
        {/*实现第二列*/}
        <View style={myStyle.col2}>
        <Text style={myStyle.greenColor}>230</Text>
         <Text style={myStyle.size}>移动端PV量</Text>
        </View>
      </View>

      {/*第二行*/}
      <View  style={myStyle.row}>
        {/*实现第一列*/}
        <View style={myStyle.col1}>
         <Text style={myStyle.redColor}>1020</Text>
         <Text style={myStyle.size}>已完成订单总数量</Text>
        </View>
        {/*实现第二列*/}
        <View style={myStyle.col2}>
        <Text style={myStyle.greenColor}>2390</Text>
         <Text style={myStyle.size}>当日App下载量</Text>
        </View>
      </View>

        {/*第三行*/}
        <View style={myStyle.row}>
          <TouchableOpacity style={myStyle.col}>
            <Image source={require("../assest/img/order.png")}></Image>
            <Text style={myStyle.size}>订单管理</Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyle.col}>
            <Image source={require("../assest/img/user.png")}></Image>
            <Text style={myStyle.size}>用户管理</Text>
          </TouchableOpacity>
        </View>

         {/*第四行*/}
        <View style={myStyle.row}>
          <TouchableOpacity style={myStyle.col} onPress={this.jump}>
            <Image source={require("../assest/img/product.png")}></Image>
            <Text style={myStyle.size}>商品管理</Text>
          </TouchableOpacity>
          <TouchableOpacity style={myStyle.col}>
            <Image source={require("../assest/img/setting.png")}></Image>
            <Text style={myStyle.size}>设置</Text>
          </TouchableOpacity>
        </View>
    </ScrollView>
  }
}


//封装样式
var myStyle=StyleSheet.create({
  content:{
    backgroundColor:"powderblue",
    flex:1
  },
  row:{
    flexDirection:"row"
  },
  size:{
    fontSize:20
  },
  //一二行样式  第一列样式
  col1:{
    justifyContent:"center",
    alignItems:"center",
    borderColor:"white",
    borderBottomWidth:2,
    flex:1,height:100,
    borderRightWidth:2
  },
  //一二行样式  第二列样式
  col2:{
    justifyContent:"center",
    alignItems:"center",
    borderColor:"white",
    borderBottomWidth:2,
    flex:1,height:100
  },
  redColor:{
    color:"red",
    fontSize:20
  },
  greenColor:{
    color:"green",
    fontSize:20
  },
  //三四行样式
  col:{
    height:200,
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  }
})