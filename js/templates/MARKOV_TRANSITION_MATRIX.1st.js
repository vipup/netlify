(function (root) {
  var transitions = {
    'SLEEP': [
      [0.7, 'SLEEP'],
      [0.3, 'WAKE_UP'],
    ],
    'WAKE_UP': [
      [1, 'BREAKFAST']
    ],
    'BREAKFAST': [
      [0.8, 'LEAVE_HOME'],
      [0.2, 'SLEEP']
    ],
    'LEAVE_HOME': [
      [0.5, 'START_ENGINE'],
      [0.5, 'RIDE_BIKE'],
    ],
    'TURN_HOME': [
      [1, 'SLEEP'],
    ],
    'START_ENGINE': [
      [0.5, 'DRIVE_CAR'],
      [0.5, 'WONT_START'],
    ],
    'WONT_START': [
      [0.8, 'TRY_AGAIN'],
      [0.2, 'RIDE_BIKE'],
    ],
    'TRY_AGAIN': [
      [1, 'START_ENGINE'],
    ],
    'DRIVE_CAR': [
      [0.2, 'REACH_OFFICE'],
      [0.4, 'DRIVE_CAR'],
      [0.4, 'HIT_BY_TRUCK']
    ],
    'RIDE_BIKE': [
      [0.2, 'REACH_OFFICE'],
      [0.4, 'RIDE_BIKE'],
      [0.4, 'HIT_BY_HORSE']
    ],
    'REACH_OFFICE': [
      [1, 'WORK'],
    ],
    'WORK': [
      [0.8, 'WORK'],
      [0.2, 'LEAVE_OFFICE'],
    ],
    'LEAVE_OFFICE': [
      [1, 'TURN_HOME'],
    ],
    'HIT_BY_HORSE': [
      [1, 'WAIT_AMBULANCE'],
    ],
    'HIT_BY_TRUCK': [
      [1, 'WAIT_AMBULANCE'],
    ],
    'WAIT_AMBULANCE': [
      [0.6, 'WAIT_AMBULANCE'],
      [0.2, 'DIE'],
      [0.2, 'REACH_HOSPITAL'],
    ],
    'REACH_HOSPITAL': [
      [0.3, 'GET_WELL'],
      [0.7, 'DIE']
    ],
    'GET_WELL': [
      [1, 'TURN_HOME']
    ],
    'DIE': [
      [0.5, 'GOD_EXISTS'],
      [0.25, 'REINCARNATE_AS_CABBAGE'],
      [0.25, 'REINCARNATE_AS_TRUCK']
    ],
    'REINCARNATE_AS_TRUCK': [
      [1, 'SLEEP'],
    ],
    'REINCARNATE_AS_CABBAGE': [
      [1, 'SLEEP'],
    ],
    'GOD_EXISTS': [
      [0.5, 'GO_TO_HELL'],
      [0.5, 'GO_TO_HEAVEN'],
    ],
    'GO_TO_HELL': [
      [1, 'SLEEP'],
    ],
    'GO_TO_HEAVEN': [
      [1, 'SLEEP'],
    ]
  };

  window.__TRANSITIONS__ = transitions;
  window.__INITIAL_STATE__ = 'SLEEP';
})(this);