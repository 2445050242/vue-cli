export default {
  testFunction(state,payload){
    state.value = '6666';
    console.log(state.value);
    console.log(payload.amount);
  },
  someMutation(){
    console.log('A');
  },
  someOtherMutation(){
    console.log('B');
  }
}
