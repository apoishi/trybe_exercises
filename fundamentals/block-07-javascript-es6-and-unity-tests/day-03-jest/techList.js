const techList = (tech, name) =>{
	const ordered = tech.sort();
	const listReturn = [];
	if (tech.length > 0) {
	  for (let index in ordered) {
		listReturn.push({ tech: ordered[index], name: name });
	  }
	  return listReturn;
	} else {
	  return 'Vazio!';
	}
  }

  module.exports = techList;
