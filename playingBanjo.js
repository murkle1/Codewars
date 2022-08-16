function areYouPlayingBanjo(name) {
    if(name.startsWith("r") || name.startsWith("R")){
      return name + " plays banjo"
    }else{
      return name + " does not play banjo"
    }
    
  }

  //by default .startsWith will start at 1, but you can start somewhere else by entering name.startsWith(r, 2)