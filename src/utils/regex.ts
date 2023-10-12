export const InvalidCharacters =
  /^[-A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ&:, 0-9]+$/;
export const onlyAcceptNumbers = /[0-9]+$/g;

export const removeInvalidCharacters = (event: any, type: string) => {
  if (type === "string") {
      if(event.target.value.trim() !== ''){
        const regex = /[^A-Za-z0-9 ]/gi;
        event.target.value = event.target.value.replace(regex, "");
      }else{
        const regex = /[\s+]/gi
        event.target.value = event.target.value.replace(regex, "");
      }
  } else {
    const regex = /[^0-9]/g;
    event.target.value = event.target.value.replace(regex, "");
  }
};

export const reduceDecimalPlaces = (value:number, decimals: number) =>{
    const multiplier = 10 ** decimals;
    const reduceValue = value * multiplier;
    const reduceValueInt = Math.floor(reduceValue);
    const result = reduceValueInt / multiplier;
    return result;
}

export function validateEmail(email:string) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}
