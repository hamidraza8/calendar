
import moment from 'moment';

const isCurrentMonthDate=function (date){
const currentMonthFirstDate=moment().startOf('M');
const currentMonthLastDate=moment().endOf('M');
return !(moment(date).isBefore(currentMonthFirstDate) || moment(date).isAfter(currentMonthLastDate));
}

 const getdateRange=function(startDate,endDate){
let dateRange=[];
let currentDate=startDate;
let index=0;
  while(currentDate.isBefore(endDate))
  {
    dateRange.push({"date":currentDate.format( "DD-MM-YYYY"),"id":index++});

currentDate.add(1,'day');
  }
  return dateRange;
 }

 const getFirstDateOfCalendar = function(){
let currentDate = moment().startOf('month');

let count=7;
do{
  let dayofWeek=currentDate.format('dd');
  
if(dayofWeek === 'Su'){

return currentDate;
}
  currentDate=currentDate.add(-1,'day');

count--;

}while(count>=0)

return currentDate;
 }

  const getLastDateOfCalendar=function(){
var currentDate = moment().endOf('month');

let count=7;
do{
  var dayofWeek=currentDate.format('dd');
if(dayofWeek==='Sa')
return currentDate;

currentDate.add(1,'day');
count--;
}while(count>=0)

return currentDate;
 }


const getWeekDaysByWeekNumber=function()
{   
 const dateformat = "dddd";
   var date =moment().isoWeek(1).startOf("week"), weeklength=7, result=[];
    let dayNumber=0;
    while(weeklength--)
    {
        result.push({"dayNumber":dayNumber++,"day":date.format(dateformat)});
        date.add(1,"day")
    }
    return result;
}


export {isCurrentMonthDate,getdateRange,getFirstDateOfCalendar,getLastDateOfCalendar,getWeekDaysByWeekNumber};