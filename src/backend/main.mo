import Array "mo:core/Array";
import Time "mo:core/Time";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Migration "migration";
import MixinAuthorization "authorization/MixinAuthorization";
import AccessControl "authorization/access-control";

(with migration = Migration.run)
actor {
  let accessControlState = AccessControl.initState();
  include MixinAuthorization(accessControlState);

  public type ContactSubmission = {
    name : Text;
    email : Text;
    phone : Text;
    agencyName : Text;
    message : Text;
    timestamp : Time.Time;
  };

  public type UserProfile = {
    name : Text;
  };

  var contactFormSubmissions : [ContactSubmission] = [];
  let immutableUserProfiles = [];

  public shared ({ caller }) func submitContactForm(name : Text, email : Text, phone : Text, agencyName : Text, message : Text) : async {
    #ok;
    #err : Text;
  } {
    let submission : ContactSubmission = {
      name;
      email;
      phone;
      agencyName;
      message;
      timestamp = Time.now();
    };

    contactFormSubmissions := contactFormSubmissions.concat([submission]);
    #ok;
  };

  public query ({ caller }) func getAllSubmissions() : async [ContactSubmission] {
    if (not AccessControl.hasPermission(accessControlState, caller, #admin)) {
      Runtime.trap("Unauthorized: Only admins can view all submissions");
    };
    contactFormSubmissions;
  };

  public query ({ caller }) func getCallerUserProfile() : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    Runtime.trap("Not implemented: No user profiles stored");
  };

  public query ({ caller }) func getUserProfile(user : Principal) : async ?UserProfile {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can access profiles");
    };
    Runtime.trap("Not implemented: No user profiles stored");
  };

  public shared ({ caller }) func saveCallerUserProfile(_ : UserProfile) : async () {
    if (not (AccessControl.hasPermission(accessControlState, caller, #user))) {
      Runtime.trap("Unauthorized: Only users can save profiles");
    };
    Runtime.trap("Not implemented: No user profiles stored");
  };
};
