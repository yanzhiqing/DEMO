import React,{Component} from "react"
import {View,Text,Button,Image,ScrollView} from "react-native"

export default class DetailComponent extends Component{
    constructor(){
        super();
        this.state={lid:1,
            title:"",
            subtitle:"",
            picList:[],
            picIndex:0,  //当前轮播的index
            timer:null
        }
    }

    componentDidMount(){
        var lid=this.props.navigation.getParam("lid")
        console.log(lid)
        var url="http://192.168.1.181:8080/product/detail?lid="+lid
        fetch(url).then((respons)=>{
            return respons.json();
        }).then((result)=>{
            //console.log(result.details)
            this.setState({
                title:result.details.title,
                subtitle:result.details.subtitle,
                picList:result.details.picList
            })
            console.log(this.state.picList[0].md)
            //启动一个定时器，每个一秒来修改picIndex
            var myTimer=setInterval(()=>{
                var nowIndex=this.state.picIndex;
                nowIndex++;
                if(nowIndex>=this.state.picList.length){
                    nowIndex=0;
                }
                this.setState({picIndex:nowIndex,timer:myTimer})
            },1000)
            this.setState({timer:myTimer})
        })
    }
    //负责清理的钩子函数
    componentWillUnmount(){
        //关闭定时器
        clearInterval(this.state.timer)
    }
    render(){
        return <View style={{flex:1}}>
            <ScrollView style={{alignSelf:"center"}}>
                {/*图片*/}
                <Image source={{uri:"http://192.168.1.181:8080/img/product/md/57b12a31N8f4f75a3.jpg"}} style={{heitht:400}}></Image>

                {/*标题*/}
                <Text>{this.state.title}</Text>

                {/*副标题*/}
                <Text>{this.state.subtitle}</Text>
            </ScrollView>
            {/*按钮*/}
            <Button title="编辑产品" color="red"></Button>
        </View>
    }
}