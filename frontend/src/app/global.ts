export class GlobalConstants {
  public static riderSignUpCognitoUrl: string = "https://church-riders.auth.us-east-2.amazoncognito.com/login?client_id=74sg13742hu871a4o7inhupvv1&response_type=token&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d3uai0gomuhytq.amplifyapp.com%2Ffrontend";    
  public static driverSignUpCognitoUrl: string = "https://drivers.auth.us-east-2.amazoncognito.com/signup?client_id=igptd8i5uhmar0lllie8pn2hg&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A8081";
  public static churchSignUpCognitoUrl: string = "https://church-ride-share.auth.us-east-2.amazoncognito.com/signup?client_id=7f0bf0jhgm544f4rimqqmeoqjk&response_type=token&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d3uai0gomuhytq.amplifyapp.com%2F";

  public static riderSignInCognitoUrl: string = "https://church-riders.auth.us-east-2.amazoncognito.com/login?client_id=74sg13742hu871a4o7inhupvv1&response_type=token&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d3uai0gomuhytq.amplifyapp.com%2Ffrontend";
  public static driverSignInCognitoUrl: string = "https://drivers.auth.us-east-2.amazoncognito.com/signup?client_id=igptd8i5uhmar0lllie8pn2hg&response_type=token&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A8081";
  public static churchSignInCognitoUrl: string = "https://church-ride-share.auth.us-east-2.amazoncognito.com/login?client_id=7f0bf0jhgm544f4rimqqmeoqjk&response_type=token&scope=email+openid+phone&redirect_uri=https%3A%2F%2Fmain.d3uai0gomuhytq.amplifyapp.com%2F";

  public static GETChurchObjects: string = 'https://xyae35uw4b.execute-api.us-east-2.amazonaws.com/test1/church';
  public static GETChurchObject: string = 'https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/churches?id='; //+ church_id
  public static GETChurchServices: string = 'https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/services?church_id='; //+ church_id

  public static POSTUserRideRequests: string = 'https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/user-ride-requests';
  public static POSTGuestRideRequest: string = "https://2z9cb2krga.execute-api.us-east-2.amazonaws.com/test1/guest-ride-request";
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
