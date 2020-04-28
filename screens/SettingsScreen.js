import React from 'react';
import { ScrollView, StyleSheet, View, Image } from 'react-native';
import { ExpoLinksView } from '@expo/samples';


export default function LinksScreen() {
  return (
    <View style={styles.container}>
              <View style={{flex: 1, flexDirection: 'row'}}>
              <View style={styles.BoxBorder}>
          <Image source={require('../assets/images/interfaceIcons_Artboard1.png')} style ={{width: 90, height: 90}} />  
            </View>
           
            </View>
            
      <ExpoLinksView />
    </View>
  );
}

LinksScreen.navigationOptions = {
  title: 'Pathology Pot  Page',
};

const styles = StyleSheet.create({
 BoxBorder: {
    marginTop: 10,
    width: 90,
    height: 90,
    borderColor: '#bcba40',
    borderStyle:'dotted',
    borderRadius: 8,
    borderWidth: 1,
    marginRight: 10,
  },

  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#282828',
  },
});