import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import {ModalCardDetailProps} from './types';

import {Body} from './styles';

const ModalCardDetail = ({isVisible, hideModal}: ModalCardDetailProps) => {
  return (
    <Modal
      animationIn="bounceIn"
      coverScreen
      hasBackdrop
      isVisible={isVisible}
      onBackdropPress={hideModal}>
      <Body>
        <View style={styles.modalView}>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={hideModal}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </View>
      </Body>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
  },
  modalView: {
    height: 400,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default ModalCardDetail;
