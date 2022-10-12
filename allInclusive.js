function containAllRots(str, arr) {
    for (var i = 0; i < str.length; i++) {
      if (arr.indexOf(str.slice(i) + str.slice(0, i)) === -1) {
        return false
      }
    }
    return true
  }

  (arr.indexOf(str.slice(i) + str.slice(0, i))

  contain_all_rots(
    "bsjq", ["bsjq", "qbsj", "sjqb", "twZNsslC", "jqbs"]) -> true
  
  contain_all_rots(
    "Ajylvpy", ["Ajylvpy", "ylvpyAj", "jylvpyA", "lvpyAjy", "pyAjylv", "vpyAjyl", "ipywee"]) -> false)