type ClickHandler = (
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>
) => Promise<void> | void;

export type { ClickHandler };
