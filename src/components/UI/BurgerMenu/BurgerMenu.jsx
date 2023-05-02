export function BurgerMenu({ setOpenBurger }) {
  return (
    <div
      className="burger-menu disable-mobile-icons-header"
      onClick={() => setOpenBurger(true)}
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
  );
}
