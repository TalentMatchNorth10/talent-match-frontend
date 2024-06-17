export const PROTECTED_PATHS = [
  { pattern: '/api/auth/refresh', methods: ['POST'] },
  { pattern: '/api/shop/cart', methods: ['GET', 'DELETE'] },
  { pattern: '/api/student/purchased_courses', methods: ['GET'] },
  { pattern: '/api/student_reservation/reserve_course', methods: ['POST'] },
  { pattern: '/api/student_reservation/reserves_time', methods: ['POST'] }
];
