import React, { Component } from 'react'
import {Text,View,FlatList,Image,TouchableOpacity,Button} from "react-native"

export default class ProductListComponent extends Component {
  constructor(){
    super()
    this.state={list:[],pno:1}
  }
  componentDidMount(){
    var url="http://192.168.1.181:8080/product/list"
    fetch(url)
    .then((response)=> response.json())
    .then((result)=>{
      //console.log(result.data)
      //遍历result.data数组，给每一个对象添加一个key属性
      for(var i=0;i<result.data.length;i++){
        result.data[i].key=i;
      }
      this.setState({list:result.data})
    })
  }
  //滑动到底部加载更多
  handleEndReached=()=>{
    //得到要请求的页码，发请求
    var newPno=this.state.pno;
    newPno++;
    //总共5页，执行一个边界值判断
    if(newPno>5){
      return;
    }
    
    var url="http://192.168.1.181:8080/product/list?pno="+newPno
    fetch(url)
    .then((response)=> response.json())
    .then((result)=>{
      console.log(result.data)
      //成功后存到
      this.setState({pno:newPno})
      //处理请求后的数据：将老的数组和result.data拼接
      var newList=this.state.list.concat(result.data)
      //遍历解决key的问题
      for(var i=0;i<newList.length;i++){
        newList[i].key=i;
      }
      this.setState({list:newList})
    })
  }
  /*showCount=(count)=>{
    alert(count);
  }*/
  jumpDetail=(lid)=>{
    this.props.navigation.push("detail",{lid:lid})
    //console.log(lid)

  }
  showItem=(info)=>{
    //注意：本地资源图片在通过require进行路径引入的时候
    return <TouchableOpacity style={{flexDirection:"row",alignItems:"center",margin:10}} onPress={()=>{this.jumpDetail(info.item.lid)}}>
        <Image source={{uri:"http://192.168.1.181:8080/"+info.item.pic}} style={{width:100,height:100,borderRadius:50}}></Image>
        <Text style={{padding:10}}>{info.item.title}</Text>
    </TouchableOpacity>
  }
  render() {
    return <FlatList data={this.state.list} renderItem={this.showItem} onEndReached={this.handleEndReached}></FlatList>
    
  }
}
