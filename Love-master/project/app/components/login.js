import React, { Component } from 'react'
import {TextInput,Image,View,Button,StyleSheet} from "react-native"

export default class LoginComponent extends Component {
    constructor(){
        super();
        this.state={
            uname:"",
            upwd:""
        }
    }
    handleChangeUname=(msg)=>{
        this.setState({uname:msg})
    }
    handleChangeUpwd=(msg)=>{
        this.setState({upwd:msg})
    }
    handlePress=()=>{
        //console.log(this.state.uname,this.state.upwd)
        var url="http://192.168.1.181:8080/user/login"
        var config={
            method:"post",
            headers:{
              "Content-Type":"application/x-www-form-urlencoded"
            },
            body:"uname="+this.state.uname+"&upwd="+this.state.upwd
        }
        fetch(url,config).then((response)=>{
            //执行一个反序列化的操作  json方法的返回值也是一个promise
            return response.json()  // json格式反序列化
        })
        .then((result)=>{
            console.log(result.code)
            if(result.code==200){
                this.props.navigation.push("Main")
            }else{
                alert("登录失败")
                //清空输入框内容
                this.setState({uname:"",upwd:""});
            }
        })
    }
  render() {
    return <View>
        <Image source={require("../assest/img/4.jpg")} style={myImg.avatar}></Image>
        <TextInput placeholder="请输入用户名" value={this.state.uname} onChangeText={this.handleChangeUname}></TextInput>
        {/*secureTextEntry={true}安全的文本输入*/}
        <TextInput secureTextEntry={true} placeholder="请输入密码" value={this.state.upwd} onChangeText={this.handleChangeUpwd}></TextInput>
        <Button title="登录" onPress={this.handlePress}></Button>
    </View>
  }
}

//封装样式
var myImg=StyleSheet.create(
    {
        avatar:{
           width:100,
           height:100,
           borderRadius:50,
           alignSelf:'center'
        }
    }
)

