import React, { Component } from 'react';
import { AppRegistry, Text, View, SafeAreaView, FlatList, Dimensions, Image, ImageBackground, TouchableOpacity, ScrollView, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';


import Note from './app/components/Note';
import { VERITABANI } from './VERITABANI';
let isim = "deneme";

import SQLite from 'react-native-sqlite-storage'


//-----------------------------------------------------------------------------------------------------------
let noteArray1 = [];
let tutar=0;

export class todoapp extends Component {

  state = {
    //noteArray:[{'date':'test 1','note':'testnote 1₺'},{'date':'Riyazus Salihin','note':'325₺'},{'date':'İrade Terbiyesi','note':'11₺'}],
    noteArray: noteArray1,
    noteText: '',
  }
  render() {
    const { navigate } = this.props.navigation;
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val} deleteMethod={onPress => { this.deleteNote(key) }} />
    });

    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container9}>

          <View style={styles.header9}>
            <Text style={styles.headerText9}>- SEPETİM -</Text>

          </View>
          <ScrollView style={styles.scrollContainer9}>
            {notes}
          </ScrollView>
          <View style={styles.footer9}>

            <TouchableOpacity onPress={this.addNote.bind(this)} onPress={() => navigate('cardislem')} style={styles.addButtom9}>

              <Text style={styles.addButtomText9}>SATIN AL</Text>
            </TouchableOpacity>
            <TextInput style={styles.textInput9}
              onChangeText={(noteText) => this.setState({ noteText })} value={this.state.noteText}
              placeholder='Toplam Tutar: ₺' placeholderTextColor='white' underlineColorAndroid='transparent'>

            </TextInput>
          </View>

        </View>
      </SafeAreaView>
    );
  }
  addNote() {
    // alert(this.state.noteText);
    if (this.state.noteText) {
      var d = new Date();
      this.state.noteArray.push({ 'date': d.getFullYear() + "/" + (d.getMonth() + 1) + "/" + d.getDate(), 'note': this.state.noteText });//  this.state.noteArray.push({'date':d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate(), 'note':this.state.noteText});
      this.setState({ noteArray: this.state.noteArray })
      this.setState({ noteText: '' });
    }

  }
  deleteNote(key) {
    this.state.noteArray.splice(key, 1);
    this.setState({ noteArray: this.state.noteArray });
   

  }
}

export class cardislem extends Component {
  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground source={require('./src/images/arkaplanresmi3.jpg')} style={{ flex: 1 }} >
          <View style={styles.containerkart}>
            <Text style={styles.logokart}><Image source={require('./src/images/kart.png')} style={{ width: 27, height: 27 }} />KART İŞLEMİNİZ</Text>

            <View style={styles.inputViewkart} >
              <TextInput
                style={styles.inputText}
                placeholder="Kart No.."
                placeholderTextColor="#aeeeee"
                onChangeText={text => this.setState({ email: text })} />
            </View>
            <View style={styles.inputViewkart} >
              <TextInput
                secureTextEntry
                style={styles.inputText}
                placeholder="Şifreniz.."
                placeholderTextColor="#aeeeee"
                onChangeText={text => this.setState({ password: text })} />
            </View>



            <TouchableOpacity style={styles.loginBtnkart} onPress={() => {this.props.navigation.navigate('Sepetim')}}>
              <Text style={styles.loginText}>ONAYLA</Text>
            </TouchableOpacity>


          </View>
        </ImageBackground>
      </SafeAreaView>

    );
  }
}


AppRegistry.registerComponent('todoapp', () => todoapp);


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

export class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { id: 1, title: "İLKOKUL KİTAP İHTİYACI", color: "#6A5ACD", members: 8, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQPxCaG7xmrEVZoiUvITGp0UxQzUhCNJoFfmDjz_4rj-P_XFEBP&usqp=CAU" },
        { id: 1, title: "LİSE KİTAP İHTİYACI", color: "#20B2AA", members: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSrS3EeQJB-dh0dB74hWGR_wICoPnYJBKEutV7KgSSH_Q6UYOst&usqp=CAU" },
        { id: 2, title: "ÜNİVERSİTE KİTAP İHTİYACI", color: "#4682B4", members: 12, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRTfYuLnUw6QWRlWliJ4TwTUvaCQSGdtpNur45NjxMfMcNWgZom&usqp=CAU" },
        { id: 3, title: "EN ÇOK SATILANLAR", color: "#87CEEB", members: 5, image: "https://i.pinimg.com/736x/dd/83/7a/dd837ab377abda9465c2d588fc3af6b4.jpg" },
        { id: 4, title: "YENİ EKLENENLER", color: "#191970", members: 6, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSc5N_eeMR_pO-9thGzrs-Ch3Ax4bV5ra7HsFjMnFA26odvchry&usqp=CAU" },
        { id: 4, title: "BU GÜN EN ÇOK SATILANLAR", color: "#87CEFF", members: 6, image: "https://i.pstimaj.com/img/78/740x418/5e3d66db66a97c4277a069a5.jpg" },
      ]
    };
  }

  clickEventListener(item) {
    Alert.Alert(item.title)
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <CustomHeader title="AnaSayfa" isHome={true} />
        <View style={styles.containerh}>
          <FlatList style={styles.listh}
            contentContainerStyle={styles.listContainerh}
            data={this.state.data}
            horizontal={false}
            numColumns={2}
            keyExtractor={(item) => {
              return item.id;
            }}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity style={[styles.cardh, { backgroundColor: item.color }]} onPress={() => { this.clickEventListener(item.view) }}>
                  <ImageBackground source={{ uri: item.image }} style={styles.cardh} ><View style={styles.cardHeaderh}>
                    <Text style={styles.titleh}>{item.title}</Text>

                  </View>
                    <View style={styles.cardFooterh}>
                      <Text style={styles.subTitleh}>{item.members} Kitap</Text>
                    </View></ImageBackground>
                </TouchableOpacity>
              )
            }} />
        </View>
      </SafeAreaView>
    );
  }
}

AppRegistry.registerComponent('HomeScreen', () => HomeScreen);
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
//onPress={() => this.props.navigation.navigate('todoapp')}
export class NotificationsScreen extends Component {//SOL EKRAN 2. BUTTON(KİTAPL LİSTESİ)
  manager = new VERITABANI();
  constructor(props) {
    super(props);

    this.state = {
      datas: []
    };
  }
  createTable_KULLANICI() {
    this.manager
      .createTable_KULLANICI()
      .then(val => {
        alert("okey");
      }).catch(err => {
        alert("false");
      });
  }
  createTable_KITAPLAR() {
    this.manager
      .createTable_KITAPLAR()
      .then(val => {
        alert("okey");
      }).catch(err => {
        alert("false");
      });
  }
  createTable_KATEGORI() {
    this.manager
      .createTable_KATEGORI()
      .then(val => {
        alert("okey");
      }).catch(err => {
        alert("false");
      });
  }
  createTable_KARTBILGI() {
    this.manager
      .createTable_KARTBILGI()
      .then(val => {
        alert("okey");
      }).catch(err => {
        alert("false");
      });
  }
  createTable_ISLEM() {
    this.manager
      .createTable_ISLEM()
      .then(val => {
        alert("okey");
      }).catch(err => {
        alert("false");
      });
   
  }
  createTable_SEPET() {
    this.manager
      .createTable_SEPET()
      .then(val => {
        alert("okey");
      }).catch(err => {
        alert("false");
      });
  }


  /*
  "SÜMEYYE","SIR","0487678908","sümeyyesır@gmail.com","sümeyyeesırr","smysır","AKTIF","K"
        "ESMA","DOĞAN","0257678908","esmadogan@gmail.com","esmaadogann","esmadgn","AKTIF","K"
        "UGUR","ÇELİK","6709678908","ugurcelik@gmail.com","ugurr234","ugrty","AKTIF","E"
        "SELMAN","CEYLAN","0287670418","fselmanceylan@gmail.com","selceylan","cylnselman","AKTIF","E"
  */

  addTable_KULLANICI() {
    this.manager
      .addTable_KULLANICI("FATIMA", "KARA", "0287678908", "fatımakara@gmail.com", "fatımaakaraa", "fatmkr", "AKTIF", "K")//
      .then(val => {
        alert("okey");
      })
      .catch(err => {
        // alert("eklemedi");
      });
  }
  addTable_KITAPLAR() {
    this.manager
      .addTable_KITAPLAR("1", "2", "Riyazus Salihin", "İMAM NEVEVİ", "402", "VAR", "Bu kıymetli eser, büyük âlim ve ârif İmam Nevevî’ye [rahmetullahi aleyh] aittir. Kendisinin İslâm ahlâkı ve âdabını öğretmek maksadıyla yaklaşık 1900 hadisi on sekiz ana başlık halinde topladığı Riyâzü’s-Sâlihîn adlı bu değerli eseri, her zaman ve her zeminde büyük ilgi görmüştür. Milletimizin din kültüründe öncelikli yeri olan hadis kitaplarının başında gelmiştir. ", "RESIM")//
      .then(val => {
        alert("okey");
      })
      .catch(err => {
        // alert("eklemedi");
      });
  }
  addTable_KATEGORI() {
    this.manager
      .addTable_KATEGORI("KATEGORİ ADI")//
      .then(val => {
        alert("okey");
      })
      .catch(err => {
        // alert("eklemedi");
      });
  }
  addTable_KARTBILGI() {
    this.manager
      .addTable_KARTBILGI(1, "KART_NO", "KARTSIFRE")//
      .then(val => {
        alert("okey");
      })
      .catch(err => {
        // alert("eklemedi");
      });
  }
  addTable_ISLEM() {
    this.manager
      .addTable_ISLEM("ISLEMADI")//
      .then(val => {
        alert("okey");
      })
      .catch(err => {
        // alert("eklemedi");
      });
  }
  addTable_SEPET() {
    this.manager
      .addTable_SEPET()//
      .then(val => {
        alert("okey");
      })
      .catch(err => {
        // alert("eklemedi");
      });
  }

  getTable_KULLANICI() {
    this.manager
      .getTable_KULLANICI()
      .then(val => {
        console.log(val);
        this.setState({
          datas: val
        });
      })
      .catch(err => {
        alert("false");
      });
  }
  getTable_KITAPLAR() {
    this.manager
      .getTable_KITAPLAR()
      .then(val => {
        console.log(val);
        this.setState({
          datas: val
        });
      })
      .catch(err => {
        alert("false");
      });
  }
  getTable_KATEGORI() {
    this.manager
      .getTable_KATEGORI()
      .then(val => {
        console.log(val);
        this.setState({
          datas: val
        });
      })
      .catch(err => {
        alert("false");
      });
  }
  getTable_KARTBILGI() {
    this.manager
      .getTable_KARTBILGI()
      .then(val => {
        console.log(val);
        this.setState({
          datas: val
        });
      })
      .catch(err => {
        alert("false");
      });
  }
  getTable_ISLEM() {
    this.manager
      .getTable_ISLEM()
      .then(val => {
        console.log(val);
        this.setState({
          datas: val
        });
      })
      .catch(err => {
        alert("false");
      });
  }

  render() {
    return (

      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flexDirection: 'row', height: 50 }}>

          <View style={{ flex: 1, justifyContent: 'center' }}>

            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'center', }}
              onPress={() =>  this.props.navigation.goBack()}>
              <Image style={{ width: 20, height: 20, marginLeft: 5 }}
                source={require('./src/images/back.png')}
                resizeMode="contain" />
              <Text >Geri</Text>
            </TouchableOpacity>

          </View>




          <View style={{ flex: 1.5, justifyContent: 'center' }}>
            <Text style={{ textAlign: 'center' }}>KİTAPLAR</Text>
          </View>
          <View style={{ flex: 1, justifyContent: 'center' }}>
            <TouchableOpacity
              style={{ flexDirection: 'row', alignItems: 'stretch', }}
              onPress={() =>  this.props.navigation.navigate('todoapp')}>
              <Image style={{ width: 20, height: 20, marginLeft: 5 }}
                source={require('./src/images/marketing.png')}
                resizeMode="contain" />

              <Text >SEPETİM</Text>
            </TouchableOpacity>


          </View>





        </View>

        <Container>
          <ScrollView>

            <View style={{ flexDirection: 'row', flex: 1, flexWrap: 'wrap' }}>
              {
                ListData.map((item, i) => {

                  return (
                    <Card key={i}>
                      <TouchableOpacity
                        onPress={() => { noteArray1.push({ 'date': item.name, 'note':item.price}),alert("Sepete Eklendi"),tutar=item}}>
                        <Image source={{ uri: item.image }} style={styles.imagelist} />
                        <Text style={styles.titlelist}>{item.name}</Text>
                        <View style={styles.priceContainerlist}>
                          <Text style={styles.pricelist}>{item.price}</Text>
                          
                        </View>
                        </TouchableOpacity>
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
}


AppRegistry.registerComponent('NotificationsScreen', () => NotificationsScreen);
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
let index = 1;
export class LoginScreen extends Component {//GİRİŞ SAYFASI
  state = {
    email: "",
    password: "",

  }
  sorgu() {
    alert("geldi");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.logo}>Giriş Sayfası</Text>
        <View style={styles.inputView} >
          <TextInput
            style={styles.inputText}
            placeholder="Kullanıcı Adınız.."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ email: text })}
          />
        </View>
        <View style={styles.inputView} >
          <TextInput
            secureTextEntry
            style={styles.inputText}
            placeholder="Şifreniz.."
            placeholderTextColor="#003f5c"
            onChangeText={text => this.setState({ password: text })}
          />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgot}>Şifremi Unuttum?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.loginBtn}
          onPress={() => {
            index === 1
            ? this.props.navigation.navigate('HomeApp')
            : alert("hatalı giriş")
          }}>
          <Text style={styles.loginText}>GİRİŞ</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('UyeSayfasi')}>
          <Text style={styles.loginText}>ÜyeOl</Text>
        </TouchableOpacity>


      </View>
    );
  }
}

AppRegistry.registerComponent('LoginScreen', () => LoginScreen);
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
      <Tab.Screen name="Sepetim" component={todoapp} />
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
        <StackApp.Screen name="cardislem" component={cardislem} options={navOptionHandler} />
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
  }, containerkart: {
    flex: 1,
    // backgroundColor: '#53868b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#fb5b5a",
    marginBottom: 40
  },
  logokart: {
    fontWeight: "bold",
    fontSize: 20,
    color: "white",
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
  inputViewkart: {
    width: "80%",
    backgroundColor: "#7a8b8b",
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
  loginBtnkart: {
    width: "80%",
    backgroundColor: "#1c6071",
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



  container9: {
    flex: 1,
  },
  header9: {
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 9,
    borderBottomColor: '#ddd',
  },
  headerText9: {
    color: 'white',
    fontSize: 18,
    padding: 23,
  },
  scrollContainer9: {
    flex: 1,
    marginBottom: 100,

  },
  footer9: {
    position: 'absolute',
    alignItems: 'center',
    bottom: 0,
    left: 0,
    right: 0,
  },
  addButtom9: {
    backgroundColor: '#E91E63',
    width: 90,
    height: 90,
    borderRadius: 50,
    borderColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 8,
    marginBottom: -45,
    zIndex: 10,
  },
  addButtomText9: {
    color: '#bdb76b',
    fontSize: 13,
  },
  textInput9: {
    alignSelf: 'stretch',
    color: '#fff',
    padding: 20,
    paddingTop: 46,
    backgroundColor: '#252525',
    borderTopWidth: 2,
    borderTopColor: '#ededed',
  },



  containerh: {
    flex: 1,
  },
  listh: {
    //paddingHorizontal: 5,
    backgroundColor: "#E6E6E6",
  },
  listContainerh: {
    alignItems: 'center'
  },
  /******** card **************/
  cardh: {
    marginHorizontal: 2,
    marginVertical: 2,
    flexBasis: '48%',
  },
  cardHeaderh: {
    paddingVertical: 41,
    paddingHorizontal: 16,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center"
  },
  cardContenth: {
    paddingVertical: 12.5,
    paddingHorizontal: 16,
  },
  cardFooterh: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 12.5,
    paddingBottom: 25,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardImageh: {
    height: 70,
    width: 70,
    alignSelf: 'center'
  },
  titleh: {
    fontSize: 16,
    flex: 1,
    color: "#003f5c",
    fontWeight: 'bold'
  },
  subTitleh: {
    fontSize: 12,
    flex: 1,
    color: "#000000",
  },
  iconh: {
    height: 20,
    width: 20,
  }
})
