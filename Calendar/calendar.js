import React, {
	Component
} from 'react';

export default class Calendat extends Component {
	constructor(props) {
		super(props);

		this.state = {
			startTime: this.props.startTime,
			num: this.props.num,
			holiday: this.props.holiday,
			check: this.props.check,
			headerStyle: this.props.headerStyle
		};
	}

	render() {
		let date = this.state.startTime,
			num = this.state.num,
			holiday = this.state.holiday,
			check = this.state.check,
			headerStyle = this.state.headerStyle;
		let items = [];
		let dateNow = new Date();
		for (var n = 0; n < num; n++) {
			/*循环完成一个月*/
			let rows = [];
			let newDate = new Date(date.getFullYear(), date.getMonth() + 1 + n, 0); // 可以获取到当前月份的天数
			let week = new Date(date.getFullYear(), date.getMonth + 1 + n, 1).getDay(); // 月份开始的星期
			if (week === 0) {
				week = 7;
			}
			let counts = newDate.getDate();
			let rowCounts = Math.ceil((counts + week - 1) / 7); // 本月行数
			for (let i = 0; i < rowCounts; i++) {
				let days = [];
				for (let j = (i * 7); j < ((i + 1) * 7) + 1; j++) {

				}
			}
		}
	}
}