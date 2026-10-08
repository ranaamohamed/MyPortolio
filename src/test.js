import React from "react";

function test() {
  const [count, setCount] = useState(0);
  useEffect(() => {}, []);
  const memoVal = useMemo(() => compute(data), [data]);
  const memoFun = useCallback(() => calc(), []);
  return <></>;
}

export default test;
