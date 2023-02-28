import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <View style={{backgroundColor: '#63A3E3', height: 220, weight: '100%'}}></View>


    
        {/* img + nama */}
      <View style={{alignItems: 'center', marginTop: -260 }}>
        <Image source={require('./src/images/imgs1.png')} style={{ height: 150, width: 150, borderRadius: 100, borderWidth: 4, borderColor: '#ffffff', marginTop: 180, alignContent: 'center', }}/>
        {/* Nama + keterangan */}
      <View>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 10, fontSize: 25,color: 'black'}}>Abimanyu Aryo Seno</Text>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 15,marginHorizontal: 50, fontSize: 15,color: 'black'}}>Siswa SMKN 2 Surakarta {"\n"} Jurusan Rekayasa Perangkat Lunak {"\n"}Kelas XII RPL B</Text>
      </View>
      <Text></Text>
      </View>

      <TouchableOpacity>
      <View style={{ alignContent: 'center', alignItems: 'center', marginTop: -5, }}>
        <View style={{ width: 320, height: 50, backgroundColor: '#63A3E3', borderRadius: 10,}}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 15,marginHorizontal: 50, fontSize: 15,color: 'white'}}>Instagram : @abimanew63_</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 8, }}>
        <View style={{ width: 320, height: 50, backgroundColor: '#63A3E3', borderRadius: 10,}}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 15,marginHorizontal: 50, fontSize: 15,color: 'white'}}>Youtube : @Abimanew_</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 8, }}>
        <View style={{ width: 320, height: 50, backgroundColor: '#63A3E3', borderRadius: 10,}}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 15,marginHorizontal: 50, fontSize: 15,color: 'white'}}>Facebook : @Abimanyu</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 8, }}>
        <View style={{ width: 320, height: 50, backgroundColor: '#63A3E3', borderRadius: 10,}}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 15,marginHorizontal: 50, fontSize: 15,color: 'white'}}>Tiktok : @Abimanew_</Text>
        </View>
      </View>
      </TouchableOpacity>

      <TouchableOpacity>
      <View style={{ alignContent: 'center', alignItems: 'center', marginTop: 8, }}>
        <View style={{ width: 320, height: 50, backgroundColor: '#63A3E3', borderRadius: 10,}}>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 15,marginHorizontal: 50, fontSize: 15,color: 'white'}}>Snack Video : @Abimanew_</Text>
        </View>
      </View>
      </TouchableOpacity>

      <View>
        <Text style={{ textAlign: 'center', fontWeight: 'bold', marginTop: 20,marginHorizontal: 50, fontSize: 13,color: 'black'}}>Archive By Abimanew_</Text>
      </View>
      <Text></Text>
      

    </View>
  )
}