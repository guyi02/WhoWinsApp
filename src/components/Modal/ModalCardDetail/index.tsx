import React from 'react';
import {StyleSheet, Text, Pressable} from 'react-native';
import Modal from 'react-native-modal';
import {ModalCardDetailProps} from './types';

import {BackDropContainer, Body} from './styles';

const ModalCardDetail = ({isVisible, hideModal}: ModalCardDetailProps) => {
  return (
    <Modal
      animationIn="slideInUp"
      coverScreen
      hasBackdrop
      isVisible={isVisible}
      onBackdropPress={hideModal}>
      <BackDropContainer>
        <Body>
          <Text style={styles.modalText}>Hello World!</Text>
          <Pressable
            style={[styles.button, styles.buttonClose]}
            onPress={hideModal}>
            <Text style={styles.textStyle}>Hide Modal</Text>
          </Pressable>
        </Body>
      </BackDropContainer>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    marginTop: 22,
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
