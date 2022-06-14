import React, { Component } from 'react';
import {AppRegistry,Text, View, SafeAreaView, Dimensions, Image, ImageBackground, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Note from './app/components/Note';

export  class todoapp extends Component{
  state={
    noteArray:[{'date':'testdate','note':'testnote 1'}],
    noteText:'',
  }
  render (){
    let notes=this.state.noteArray.map((val,key)=>{
      return <Note key={key} keyval={key} val={val} deleteMethod={onPress=>{this.deleteNote(key)}}/>
    });
    return(
      <View style={styles.container9}>
        <View style={styles.header9}>
          <Text style={styles.headerText9}>- NOTER -</Text>

        </View>
        <ScrollView style={styles.scrollContainer9}>
          {notes}
        </ScrollView>
        <View style={styles.footer9}>
          <TouchableOpacity onPress={this.addNote.bind(this)} style={styles.addButtom9}>

            <Text style={styles.addButtomText9}>+</Text>
          </TouchableOpacity>
          <TextInput style={styles.textInput9}
            onChangeText={(noteText)=>this.setState({noteText})} value={this.state.noteText}
            placeholder=' >note' placeholderTextColor='white' underlineColorAndroid='transparent'>

            </TextInput>
        </View>
      
      </View>
    );
  }
  addNote(){
   // alert(this.state.noteText);
   if(this.state.noteText){
     var d=new Date();
     this.state.noteArray.push({'date':d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate(), 'note':this.state.noteText});
     this.setState({noteArray:this.state.noteArray})
     this.setState({noteText:''});
   }
  }
  deleteNote(key){
    this.state.noteArray.splice(key,1);
    this.setState({noteArray:this.state.noteArray});
   
  }
}


AppRegistry.registerComponent('todoapp',()=>todoapp);


function CustomHeader({ title, isHome, navigation }) {//ÜST ÇUBUK AYARI
  return (
    <View style={{ flexDirection: 'row', height: 50 }}>

      <View style={{ flex: 1, justifyContent: 'center' }}>
        {
          isHome ?
            <TouchableOpacity onPress={() => navigation.openDrawer()}>
              <Image style={{ width: 30, height: 30, marginLeft: 5 }}
                source={require('./src/images/menu.png')}
                resizeMode="contain"
              />
            </TouchableOpacity>
            :
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', }}
              onPress={() => navigation.goBack()}>
              <Image style={{ width: 20, height: 20, marginLeft: 5 }}
                source={require('./src/images/back.png')}
                resizeMode="contain" />
              <Text >Geri</Text>
            </TouchableOpacity>
        }
      </View>



      <View style={{ flex: 1.5, justifyContent: 'center' }}>
        <Text style={{ textAlign: 'center' }}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}></View>


    </View>
  )
}



function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('HomeDetail')}
        >
          <Text>Go Home Detail</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  );
}

function HomeScreenDetail({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Home Detail" navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home Detail</Text>

      </View>
    </SafeAreaView>
  );
}


function SettingsScreen({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Settings" isHome={true} navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => navigation.navigate('todoapp')}
        >
          <Text>Go Settings Detail</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

function SettingsScreenDetail({ navigation }) {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Settings Detail" navigation={navigation} />
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings Detail</Text>

      </View>
    </SafeAreaView>
  );
}

//notification
const resizeComponent = (value, percentage) => {
  return value - (value * (percentage / 100));
}
const Window = {
  Height: Dimensions.get("window").height,
  Width: Dimensions.get("window").width
}
const CardContainerSize = {
  Width: resizeComponent(Window.Width, 50),
  Height: resizeComponent(300, 5),
}

const ListData = [
  { id: 1, name: 'Riyazus Salihin', price: '325₺', image: 'https://cdn.bkmkitap.com/riyazus-salihin-hadis-i-serif-tercumesi-8-cilt-takim-ciltli-2819310-23-O.jpg' },
  { id: 2, name: 'El Edebül Müfred', price: '90₺', image: 'https://www.tahlilyayinlari.com/_contents/130_e84262358443.jpg' },
  { id: 3, name: 'Yedi Güzel Kadın', price: '15₺', image: 'https://cdn.1000kitap.com/k/resimler/kitaplar/56586_jAvZV_1492141338.jpg' },
  { id: 4, name: 'İrade Terbiyesi', price: '11₺', image: 'https://i.dr.com.tr/cache/600x600-0/originals/0001776241001-1.jpg' },
  { id: 5, name: 'Ali Ulvi Kurucu Hatıralar', price: '25₺', image: 'https://www.tahlilyayinlari.com/_contents/259_e19822543300.jpg' },
  { id: 6, name: 'Riyazus Salihin', price: '325₺', image: 'https://cdn.bkmkitap.com/riyazus-salihin-hadis-i-serif-tercumesi-8-cilt-takim-ciltli-2819310-23-O.jpg' },
  { id: 7, name: 'El Edebül Müfred', price: '90₺', image: 'https://www.tahlilyayinlari.com/_contents/130_e84262358443.jpg' },
  { id: 8, name: 'Yedi Güzel Kadın', price: '15₺', image: 'https://cdn.1000kitap.com/k/resimler/kitaplar/56586_jAvZV_1492141338.jpg' },
  { id: 9, name: 'İrade Terbiyesi', price: '11₺', image: 'https://i.dr.com.tr/cache/600x600-0/originals/0001776241001-1.jpg' },
  { id: 10, name: 'Ali Ulvi Kurucu Hatıralar', price: '25₺', image: 'https://www.tahlilyayinlari.com/_contents/259_e19822543300.jpg' }


]
class Container extends Component {
  render() {
    return (

      <View style={styles.containerlist}>
        {this.props.children}
      </View>
    );
  }
}
class Card extends Component {
  render() {
    return (
      <View style={styles.cardContainerlist}>
        <View style={styles.cardlist}>
          {this.props.children}
        </View>
      </View>
    );
  }
}
//notification
function NotificationsScreen({ navigation }) {//SOL EKRAN 2. BUTTON
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <CustomHeader title="Notifications" navigation={navigation} />
      <Container>
        <ScrollView>

          <View style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap' }}>
            {
              ListData.map((item, i) => {
                return (
                  <Card key={i}>
                    <TouchableOpacity
                      onPress={() => navigation.navigate('Home')}>
                      <Image source={{ uri: item.image }} style={styles.imagelist} />
                      <Text style={styles.titlelist}>{item.name}</Text>
                      <View style={styles.priceContainerlist}>
                        <Text style={styles.pricelist}>{item.price}</Text>
                      </View></TouchableOpacity>
                  </Card>
                )

              })
            }
          </View>
        </ScrollView>

      </Container>

    </SafeAreaView>
  );
}
function RegisterScreen({ navigation }) {//GİRİŞ SAYFASI EK SAYFA
  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.container}>
        <Text style={styles.logo}>Üye Formu</Text>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Adınız.."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="SoyAdınız.."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })} />
        </View>

        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Kullanıcı Adınız.."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ email: text })} />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Şifreniz.."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })} />
        </View>



        <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('GirisSayfasi')}>
          <Text style={styles.loginText}>ÜyeOl</Text>
        </TouchableOpacity>


      </View>
    </SafeAreaView>
  );
}
function LoginScreen({ navigation }) {//GİRİŞ SAYFASI
  state = {
    email: "",
    password: ""
  }
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Giriş Sayfası</Text>
      <View style={styles.inputView} >
        <TextInput
          style={styles.inputText}
          placeholder="Kullanıcı Adınız.."
          placeholderTextColor="#003f5c"
        //  onChangeText={text => this.setState({email:text})}
        />
      </View>
      <View style={styles.inputView} >
        <TextInput
          secureTextEntry
          style={styles.inputText}
          placeholder="Şifreniz.."
          placeholderTextColor="#003f5c"
        // onChangeText={text => this.setState({password:text})}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot}>Şifremi Unuttum?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('HomeApp')}>
        <Text style={styles.loginText}>GİRİŞ</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('UyeSayfasi')}>
        <Text style={styles.loginText}>ÜyeOl</Text>
      </TouchableOpacity>


    </View>
  );
}

function CustomerDrawerContent(props) {//SOL MENU
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground source={require('./src/images/arkaplan4.jpg')} style={{ flex: 1 }} >
        <View style={{ height: 170, alignItems: 'center', justifyContent: 'flex-end' }}>

          <Image source={require('./src/images/arkaplan7.jpg')}
            style={{ height: 80, width: 80, borderRadius: 80 }}
          />

        </View>
      </ImageBackground>
      <ScrollView style={{ marginLeft: 10 }}>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate('Home')}
        >
          <Text>Ana Sayfa</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate('Notifications')}
        >
          <Text>Dini Kitaplar{/*Notifications*/}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate('Notifications')}
        >
          <Text>Psikoloji Kitapları</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate('Notifications')}
        >
          <Text>Tarihi Kitaplar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate('Notifications')}
        >
          <Text>Üniversite Kitapları</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate('Notifications')}
        >
          <Text>Lise Kitapları</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate('Notifications')}
        >
          <Text>İlkokul Kitapları</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{ marginTop: 20 }}
          onPress={() => props.navigation.navigate('MenuTab')}
        >
          <Text>Geri Dön</Text>
        </TouchableOpacity>

      </ScrollView>
    </SafeAreaView>
  )
}

const Tab = createBottomTabNavigator();

const navOptionHandler = () => (
  {
    headerShown: false
  }
)

const StackHome = createStackNavigator()

function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen name="Home" component={HomeScreen} options={navOptionHandler} />
      <StackHome.Screen name="HomeDetail" component={HomeScreenDetail} options={navOptionHandler} />
    </StackHome.Navigator>
  )
}

const StackSetting = createStackNavigator()

function SettingStack() {
  return (
    <StackSetting.Navigator initialRouteName="Setting">
      <StackSetting.Screen name="Setting" component={SettingsScreen} options={navOptionHandler} />
      <StackSetting.Screen name="SettingDetail" component={SettingsScreenDetail} options={navOptionHandler} />
    </StackSetting.Navigator>
  )
}

function TabNavigator() {//ALT MENU 
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {//ALT MENU RESİM AYARLAMASI
          let iconName;

          if (route.name === 'Ana Ekran') {
            iconName = focused
              ? require('./src/images/ev.png')
              : require('./src/images/ev.png');
          }
          else if (route.name === 'Sepetim') {
            iconName = focused ?
              require('./src/images/marketing.png')
              : require('./src/images/marketing.png');
          }



          // You can return any component that you like here!
          return <Image source={iconName} style={{ width: 33, height: 33 }} resizeMode="contain" />;
        },
      })}
      tabBarOptions={{//ALT MENU RENK DEĞİŞİMLERİ
        activeTintColor: 'tomato',
        inactiveTintColor: 'black',

      }}
    >
      <Tab.Screen name="Ana Ekran" component={HomeStack} />
      <Tab.Screen name="Sepetim" component={SettingStack} />
    </Tab.Navigator>

  )
}

const Drawer = createDrawerNavigator();

function DrawerNvigator() {//SOL MENU SAYFALARI
  return (
    <Drawer.Navigator initialRouteName="MenuTab"
      drawerContent={props => CustomerDrawerContent(props)}>
      <Drawer.Screen name="Ana Sayfa" component={HomeScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="MenuTab" component={TabNavigator} />
    </Drawer.Navigator>
  )
}
const StackApp = createStackNavigator()
export default function App() {//BAŞLANGIÇ SAYFASI
  return (
    <NavigationContainer>
      <StackApp.Navigator initialRouteName="GirisSayfasi">
        <StackApp.Screen name="HomeApp" component={DrawerNvigator} options={navOptionHandler} />
        <StackApp.Screen name="GirisSayfasi" component={LoginScreen} options={navOptionHandler} />
        <StackApp.Screen name="UyeSayfasi" component={RegisterScreen} options={navOptionHandler} />
        <StackApp.Screen name="todoapp" component={todoapp} options={navOptionHandler} />

      </StackApp.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fb5b5a",
    marginBottom: 40
  },
  inputView: {
    width: "80%",
    backgroundColor: "#465881",
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 20
  },
  inputText: {
    height: 50,
    color: "white"
  },
  forgot: {
    color: "white",
    fontSize: 11
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10
  },
  loginText: {
    color: "white"
  },
  container1: {
    flex: 1
  },
  materialCardWithButtons: {
    width: 159,
    height: 272
  },
  materialCardWithButtons1: {
    width: 158,
    height: 272,
    marginLeft: 28
  },
  materialCardWithButtonsRow: {
    height: 272,
    flexDirection: "row",
    marginTop: 104,
    marginLeft: 15,
    marginRight: 15
  },
  materialCardWithButtons2: {
    width: 159,
    height: 272
  },
  materialCardWithButtons3: {
    width: 158,
    height: 272,
    marginLeft: 28
  },
  materialCardWithButtons2Row: {
    height: 272,
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15
  },
  container1: {
    flex: 1,
    flexDirection: "row",
    alignItems: "stretch",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  materialCardWithButtons: {
    width: 158,
    height: 334
  },
  materialCardWithButtons1: {
    width: 159,
    height: 334,
    borderWidth: 0
  },
  materialCardWithButtons2: {
    width: 158,
    height: 334
  },
  materialCardWithButtons3: {
    width: 158,
    height: 334,
    borderColor: "#000000",
    borderWidth: 0
  },
  materialCardWithButtons4: {
    width: 159,
    height: 334
  },
  materialCardWithButtons5: {
    width: 159,
    height: 334
  },
  containerlist: {
    flex: 1,
    flexDirection: 'row'
  },
  cardContainerlist: {
    height: 300,
    width: CardContainerSize.Width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardlist: {
    height: resizeComponent(300, 5),
    width: resizeComponent(CardContainerSize.Width, 5),
    elevation: 3,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5
  },
  imagelist: {
    width: resizeComponent(CardContainerSize.Width, 7),
    height: 231,
    resizeMode: 'stretch'
  },
  titlelist: {
    fontSize: 13,
    fontWeight: 'bold',
    padding: 10
  },
  priceContainerlist: {
    position: 'absolute',
    bottom: 10,
    right: 10
  },
  pricelist: {
    fontSize: 13,
    fontWeight: 'bold'
  },



  container9:{
    flex:1,
  },
  header9:{
    backgroundColor:'#E91E63',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd',
  },
  headerText9:{
    color:'white',
    fontSize:18,
    padding:26,
  },
  scrollContainer9:{
    flex:1,
    marginBottom:100,

  },
  footer9:{
    position:'absolute',
    alignItems:'center',
    bottom:0,
    left:0,
    right:0,
  },
  addButtom9:{
    backgroundColor:'#E91E63',
    width:90,
    height:90,
    borderRadius:50,
    borderColor:'#ccc',
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
    marginBottom:-45,
    zIndex:10,
  },
  addButtomText9:{
    color:'#fff',
    fontSize:24,
  },
  textInput9:{
    alignSelf:'stretch',
    color:'#fff',
    padding:20,
    paddingTop:46,
    backgroundColor:'#252525',
    borderTopWidth:2,
    borderTopColor:'#ededed',
  }
})