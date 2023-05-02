export class GlobalConstants {
  public static riderSignUpCognitoUrl: string = "https://church-riders.auth.us-east-2.amazoncognito.com/signup?client_id=74sg13742hu871a4o7inhupvv1&response_type=token&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d3uai0gomuhytq.amplifyapp.com%2Ffrontend";    
  public static driverSignUpCognitoUrl: string = "https://drivers.auth.us-east-2.amazoncognito.com/signup?client_id=igptd8i5uhmar0lllie8pn2hg&response_type=token&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d3uai0gomuhytq.amplifyapp.com%2Fsign-up";
  public static churchSignUpCognitoUrl: string = "https://church-ride-share.auth.us-east-2.amazoncognito.com/signup?client_id=7f0bf0jhgm544f4rimqqmeoqjk&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https%3A%2F%2Fmain.d3uai0gomuhytq.amplifyapp.com%2Faccount";

  public static riderSignInCognitoUrl: string = "https://church-riders.auth.us-east-2.amazoncognito.com/login?client_id=74sg13742hu871a4o7inhupvv1&response_type=token&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d3uai0gomuhytq.amplifyapp.com%2Ffrontend";
  public static driverSignInCognitoUrl: string = "https://drivers.auth.us-east-2.amazoncognito.com/login?client_id=igptd8i5uhmar0lllie8pn2hg&response_type=token&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d3uai0gomuhytq.amplifyapp.com%2Fsign-up";
  public static churchSignInCognitoUrl: string = "https://church-ride-share.auth.us-east-2.amazoncognito.com/login?client_id=7f0bf0jhgm544f4rimqqmeoqjk&response_type=token&scope=aws.cognito.signin.user.admin+email+openid+phone+profile&redirect_uri=https%3A%2F%2Fmain.d3uai0gomuhytq.amplifyapp.com%2Faccount";

  public static GETChurchObjects: string = 'https://xyae35uw4b.execute-api.us-east-2.amazonaws.com/test1/church';
  public static GETChurchObject: string = 'https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/churches?id='; //+ church_id
  public static GETChurchServices: string = 'https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/services?church_id='; //+ 
  // Below GET requests should require tokens
  public static GETGuestRideRequests: string = 'https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/guest-ride-request';
  public static GETAdmins: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/admins";
  public static GETAdminsByChurchId: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/admins?church_id="; //+ church_id
  public static GETAdminsByUsername: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/admins?username="; // + username
  public static GETDrivers: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/drivers";
  public static GETDriversByChurchId: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/drivers?church_id="; //+ church_id
  public static GETDriversByUsername: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/drivers?username="; // + username

  public static POSTGuestRideRequest: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/guest-ride-request";
  // Below POST requests should require tokens
  public static POSTUserRideRequests: string = 'https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/user-ride-requests';
  public static POSTService: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/services"
  public static POSTAdmins: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/admins"
  public static POSTDrivers: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/drivers"

  // Below DELETE requests should require tokens
  public static DELETEService: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/services?service_id="; // + service id
  public static DELETEAdmin: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/admins?username=" // + username
  public static DELETEDriver: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/drivers" // params={'username': username, 'churchId': church_id}

  // Below PATCH request should require token
  public static PATCHChurchObject: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/churches?id="; //+ church_id
}

export function getFormattedDay(minutes: any) {
  const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const minutesInDay = 1440; // 24 * 60 (24 hours in a day, 60 minutes in an hour)
  
  const dayOfWeek = weekdays[Math.floor(minutes / minutesInDay)];
  const minutesInCurrentDay = minutes % minutesInDay;
  
  const hour = Math.floor(minutesInCurrentDay / 60);
  const minute = minutesInCurrentDay % 60;
  const amPm = hour < 12 ? "am" : "pm";
  const formattedHour = hour % 12 === 0 ? 12 : hour % 12; // convert hour to 12-hour format
  
  return `${dayOfWeek}, ${formattedHour}:${minute.toString().padStart(2, "0")}${amPm}`;
}

export function getFormattedMinutes(day: any, time: any) {
  const daysOfWeek = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const dayIndex = daysOfWeek.indexOf(day.toLowerCase());

  const hours = parseInt(time.split(':')[0]);
  const minutes = parseInt(time.split(':')[1]);
  const totalMinutes = (dayIndex * 24 * 60) + (hours * 60) + minutes;

  return totalMinutes;
}