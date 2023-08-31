import classNames from 'classnames';

export interface ProgressBarProps {
  percentage: number;
  className?: string;
}

const ProgressBar = ({
  percentage,
  className,
  ...props
}: ProgressBarProps & React.ComponentProps<'div'>) => {
  const progressClassName = classNames(
    'h-full rounded-full bg-primary-400 text-primary-400'
  );

  const progressStyle = {
    width: `${percentage}%`,
  };

  return (
    <div className="grid">
      <span className="text-end font-[600] text-primary-400">
        {percentage}% 완료!
      </span>
      <div
        className={classNames(
          'h-[10px] w-full rounded-full bg-primary-100',
          className
        )}
        {...props}
      >
        <div className={progressClassName} style={progressStyle} />
      </div>
    </div>
  );
};
export default ProgressBar;
