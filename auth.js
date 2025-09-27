// This script runs on every page except the login page.
// It checks if the user is logged in. If not, it redirects to the login page.
(function() {
    const userRole = localStorage.getItem('userRole');
    const currentPage = window.location.pathname.split('/').pop();

    // If there's no user role, redirect to login page
    if (!userRole) {
        // Allow access only to the login page itself if not logged in
        if (currentPage !== 'login.html') {
            window.location.href = './login.html';
        }
        return;
    }

    // Define pages restricted to IT Admins
    const adminOnlyPages = [
        'close_complaint.html',
        'it_logger.html',
        'purchase_request.html'
    ];

    // If the user is an employee and tries to access an admin-only page, redirect them
    if (userRole === 'employee' && adminOnlyPages.includes(currentPage)) {
        alert('Access Denied: You do not have permission to view this page.');
        window.location.href = './index.html';
    }
})();

