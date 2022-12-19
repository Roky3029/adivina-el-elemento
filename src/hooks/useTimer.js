import { useTimer } from 'react-timer-hook'

const useTimerHook = count => {
  const time = new Date()
  const expiryTime = time.setSeconds(time.getSeconds + count)
  const { seconds, minutes, isRunning, start } = useTimer({ expiryTime, onExpire: () => console.error('Se termino el contador') })

  return { seconds, minutes, isRunning, start }
}

export default useTimerHook
