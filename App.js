/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useRef, useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  // Share,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  Image,
  View,
  ImageBackground,
} from 'react-native';
import ViewShot  from "react-native-view-shot";
import Share from "react-native-share";  import fetch_blob from 'react-native-fetch-blob';

// import CameraRoll from "@react-native-community/cameraroll";

const App = () => {

  const viewShotRef = useRef();
  const [imageUri, setImageUri] = useState('');
  const [imageTerisi, setImageTerisi] = useState(false);

  const captureShare = () => {
    viewShotRef.current.capture().then(
      uri => {
        let base64_uri = uri.replace(';base64,','');
        console.log(uri);
        // setImageUri('data:image/jpg;base64,' + uri)
        // Share.open({title:'Image',url:uri, filename:'test.jpg'});
        Share.open({title:'Image',url:'data:image/jpg;base64,' + uri+'', filename:'test.jpg'});
      }
    )
  }

  return (
    <SafeAreaView style={{flex:1}}>
      <View style={{flex:1}}>
        <View style={{height:400, backgroundColor:'red'}}>
          <ScrollView>
            <ViewShot  
            ref={viewShotRef} 
            options={{format:'jpg', quality:1.0, result:'base64'}}>
            <ImageBackground
              source={{uri: 'https://static.wikia.nocookie.net/jpop/images/f/fe/Kanna_hashimoto_profile.jpg/revision/latest?cb=20200828202459'}}
              style={{height:800}}
              > 

              
              <Text style={{backgroundColor:'white', marginTop:50}}>Ini Bukti Transfer Bagian Atas</Text>
            </ImageBackground>

              {/* <Image
                style={{height:800}}
                source={{uri: 'https://static.wikia.nocookie.net/jpop/images/f/fe/Kanna_hashimoto_profile.jpg/revision/latest?cb=20200828202459'}}
                /> */}
                <Text>Ini Bukti Transfer Bagian Bawah</Text>
            </ViewShot>
          </ScrollView>
        </View>
        
            {
              imageUri!=''?(
                <Image 
                  style={{height:290, width:100, backgroundColor:'red'}}
                  source={{uri:imageUri}}
                />
              ):null
            }
      </View>
      <View style={{height:35}}>
        <TouchableOpacity style={styles.button} onPress={captureShare}>
          <Text>ScreenShoot</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  button:{
    height:30, 
    padding:2, 
    backgroundColor:'gray'
  },
  content: {
    backgroundColor:'grey', 
    margin:10, 
    height:200,
    width:300
  }
});

export default App;
