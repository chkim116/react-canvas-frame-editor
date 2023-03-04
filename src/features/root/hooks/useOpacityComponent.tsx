import { ReactNode, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';

interface OpacityComponentProps {
  children: ReactNode;
}

export function useOpacityComponent(trigger: unknown = true) {
  const [opacityAnimation, api] = useSpring(() => ({
    from: { opacity: 0, translateY: '15px' },
    to: { opacity: 1, translateY: '0px' },
    config: { duration: 600 },
  }));

  useEffect(() => {
    if (trigger) {
      api.update({
        from: { opacity: 0, translateY: '15px' },
        to: { opacity: 1, translateY: '0px' },
        config: { duration: 400 },
      });
      api.start();
    }
  }, [trigger, api]);

  const OpacityComponent = ({ children }: OpacityComponentProps) => (
    <animated.div style={opacityAnimation}>{children}</animated.div>
  );

  return { OpacityComponent };
}
