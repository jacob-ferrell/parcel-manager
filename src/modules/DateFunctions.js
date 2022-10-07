function getTodaysDate() {
    const today = new Date();
    const yyyy = today.getFullYear();
    let mm = (today.getMonth() + 1).toString().padStart(2, '0');
    let dd = (today.getDate()).toString().padStart(2, '0');
    const date = mm + '/' + dd + '/' + yyyy;
    return date;
}

  function getCounts(input) {
    let totalPackages = (input.match(/In-Hand\sDate\:/g) || []).length;
    let [pastDue, dueToday, future] = [0, 0, 0];
    let dates = input.match(/\d{2}[/]\d{2}[/]\d{4}/g) || [];
    let noInHand = totalPackages - dates.length;
    let updateReq = (input.match(/Shipment\sUpdate\sRequired/g) || []).length;
    const todayParsed = Date.parse(getTodaysDate());
    dates.forEach(date => {
        const parsed = Date.parse(date);
        if (parsed == todayParsed) dueToday++;
        else if (todayParsed > parsed) pastDue++;
        else if (todayParsed < parsed) future++;
    });

    return [totalPackages, pastDue, dueToday, future, noInHand, updateReq];
  }

  export {getTodaysDate, getCounts};