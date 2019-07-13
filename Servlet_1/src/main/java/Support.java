import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class Support extends HttpServlet {

    private int support_ticket_id = 0;

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        ServletContext sc = this.getServletContext();
        String support_email = sc.getInitParameter("support-email");

        support_ticket_id += 1;
        String name = request.getParameter("name");
        String email = request.getParameter("email");
        String problemTitle = request.getParameter("problem");
        String problemDescription = request.getParameter("description");

        PrintWriter out = response.getWriter();
        out.print("<p>Thank you! <strong>" + name + "</strong> for contacting us. We should receive reply from us with in 24 hrs in your email address <strong>" + email + ".</strong> Let us know in our support email <strong>"
        + support_email + "</strong> if you don't receive reply within 24 hrs. Please be sure to attach your reference <strong>" + support_ticket_id + "</strong> in your email.</p>");
        out.print("<p><strong>Your problem title is: </strong>" + problemTitle +"</p>");
        out.print("<p><strong>Description: </strong>" + problemDescription +"</p>");
    }
}