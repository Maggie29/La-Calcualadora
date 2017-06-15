'use strict'
const render = (root) =>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if (state.selectedSede = !null){
    wrapper.append(GameOver(update));
  }else{
    wrapper.append(Game(update));
  }else{
    wrapper.append(GameStart(update));
  }
  root.append(wrapper)
}

const update = function(){
  render(root);
}

const state = {
  sedes: sedes,
  selectedSede: null,
  status: null,
}

const root = $(".root");
  $(_ => {
    const select = $('select');
    select.change(function(){
      state.selectedSede =  state.sede.filter(function(sede){
        return sede.name == select.val();
      })
      state.status = null;
      arrNumber = [];
      update();
    });
    render(root);
  });
