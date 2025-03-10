"use strict";
'use server';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signInAction = signInAction;

function signInAction() {
  return regeneratorRuntime.async(function signInAction$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(singIn("google", {
            redirectTo: "/account"
          }));

        case 2:
        case "end":
          return _context.stop();
      }
    }
  });
}
//# sourceMappingURL=actions.dev.js.map
