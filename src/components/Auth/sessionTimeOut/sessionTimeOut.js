import React, {
    useState,
    useEffect,
    useCallback,
    useRef,
    Fragment,
  } from 'react';
  import moment from 'moment';
  import {useSelector} from 'react-redux'
  import {logOut} from '../LoginAction'
  // import { useAuth } from '../context';
  
  const SessionTimeout = () => {
    const {userInfo} = useSelector(state => state.user);
    const [events, setEvents] = useState(['click', 'load', 'scroll']);
    const [second, setSecond] = useState(0);
    const [isOpen, setOpen] = useState(false);
    // const {
    //   authState: { isAuthenticated },
    //   logout,
    // } = useAuth();
  
    let timeStamp;
    let warningInactiveInterval = useRef();
    let startTimerInterval = useRef();
  
    // start inactive check
    let timeChecker = () => {
      startTimerInterval.current = setTimeout(() => {
        let storedTimeStamp = localStorage.getItem('lastTimeStamp');
        warningInactive(storedTimeStamp);
      }, 2000);
    };
  
    // warning timer
    let warningInactive = (timeString) => {
      clearTimeout(startTimerInterval.current);
  
      warningInactiveInterval.current = setInterval(() => {
        const maxTime = 2;
        const popTime = 1;
  
        const diff = moment.duration(moment().diff(moment(timeString)));
        const minPast = diff.minutes();
        const leftSecond = 60 - diff.seconds();
  
        if (minPast === popTime) {
          setSecond(leftSecond);
          setOpen(true);
        }
  
        if (minPast === maxTime) {
          clearInterval(warningInactiveInterval.current);
          setOpen(false);
          localStorage.removeItem('lastTimeStamp');
          logOut();
        }
      }, 1000);
    };
  
    // reset interval timer
    let resetTimer = useCallback(() => {
      clearTimeout(startTimerInterval.current);
      clearInterval(warningInactiveInterval.current);
  
      if (!!userInfo) {
        timeStamp = moment();
        localStorage.setItem('lastTimeStamp', timeStamp);
      } else {
        clearInterval(warningInactiveInterval.current);
        localStorage.removeItem('lastTimeStamp');
      }
      timeChecker();
      setOpen(false);
    }, [!!userInfo]);
  
    // handle close popup
    const handleClose = () => {
      setOpen(false);
  
      resetTimer();
    };
  
    useEffect(() => {
      events.forEach((event) => {
        window.addEventListener(event, resetTimer);
      });
  
      timeChecker();
  
      return () => {
        clearTimeout(startTimerInterval.current);
        //   resetTimer();
      };
    }, [resetTimer, events, timeChecker]);
  
    console.log(second);
  
    if (!isOpen) {
      return null;
    }
  
    // change fragment to modal and handleclose func to close
    return <Fragment />;
  };
  
  export default SessionTimeout;
  