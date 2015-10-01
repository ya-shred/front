import assign  from 'react/lib/Object.assign';

function Dates() {
	this.date = new Date();
	this.day = this.date.getDate() < 10 ? '0' + this.date.getDate() : this.date.getDate();
	this.month = this.date.getMonth() < 10 ? '0' + this.date.getMonth() : this.date.getMonth();
	this.year = this.date.getFullYear().toString().slice(2);
	this.hours = this.date.getHours() < 10 ? '0' + this.date.getHours() : this.date.getHours();
	this.minutes = this.date.getMinutes()  < 10 ? '0' + this.date.getMinutes() : this.date.getMinutes();
}
//получить только время
Dates.prototype.getTime = function () {
	return this.hours + ":" + this.minutes;
};
//получить только дату день - месяц - год
Dates.prototype.getDate = function () {
	return this.day + '.' + this.month + '.' + this.year;
};
//получить и дату и время
Dates.prototype.getFullDate = function () {
	return this.day + '.' + this.month + '.' + this.year + " в " + this.hours + ":" + this.minutes;
};

export default Dates;