export const PROTECTED_PATHS = [
  { pattern: '/api/auth/refresh', methods: ['POST'] },
  { pattern: '/api/shop/cart', methods: ['GET', 'DELETE', 'POST'] },
  { pattern: '/api/shop/order', methods: ['GET'] },
  { pattern: '/api/student/purchased_courses', methods: ['GET'] },
  { pattern: '/api/student_reservation/reserve_course', methods: ['POST'] },
  { pattern: '/api/student_reservation/reserves_time', methods: ['POST'] },
  { pattern: '/api/favorites', methods: ['POST'] },
  { pattern: '/api/upload/file', methods: ['POST'] },
  { pattern: '/api/teacher_course', methods: ['GET', 'POST'] },
  { pattern: '/api/teacher_video', methods: ['GET', 'POST'] },
  { pattern: '/api/file', methods: ['POST', 'GET', 'DELETE'] },
  { pattern: '/api/announcement', methods: ['GET', 'POST', 'PUT'] },
  { pattern: '/api/chat', methods: ['GET', 'POST', 'PUT'] }
];
