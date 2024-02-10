// import * as Tooltip from '@radix-ui/react-tooltip';
import * as Tooltip from '../../react/tooltip/src/Tooltip';
import './style.css';

export default function ToolTip() {
  return (
    <Tooltip.Provider delayDuration={1}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>
          <button>tooltip</button>
        </Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content className="tooltip-content">
            Learn styleX
            <Tooltip.Arrow className="TooltipArrow" offset={10} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
}
