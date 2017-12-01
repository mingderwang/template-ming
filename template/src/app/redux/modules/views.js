export function enter<%= PageName %>(time = moment().format()) {
  return {
    type: ENTER_<%= PageName %>_VIEW,
    currentView: '<%= PageName %>View',
    enterTime: time,
    leaveTime: null
  };
}

export function leave<%= PageName %>(time = moment().format()) {
  return {
    type: LEAVE_<%= PageName %>_VIEW,
    currentView: '<%= PageName %>View',
    enterTime: null,
    leaveTime: time
  };
}

const ENTER_<%= PageName %>_VIEW = 'ENTER_<%= PageName %>_VIEW';
const LEAVE_<%= PageName %>_VIEW = 'LEAVE_<%= PageName %>_VIEW';


