(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/_playground/responsive-design/responsive-design.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/_playground/responsive-design/responsive-design.component.html ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<app-responsive-design></app-responsive-design>-->\n<!--<app-reset-password></app-reset-password>-->\n<!--<app-sign-in></app-sign-in>-->\n<!--<app-main></app-main>-->\n<!--<app-manage-classroom-students></app-manage-classroom-students>-->\n<app-alt-main></app-alt-main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/reset-password/reset-password.component.html":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/authentication/reset-password/reset-password.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"reset-password-popup\">\n\n  <mat-card id=\"reset-password-popup-card\">\n    <div id=\"reset-password-title\" class=\"mat-display-1\">Reset Eduflow Password</div>\n    <form class=\"example-form\">\n      <mat-form-field class=\"match-parent-width\">\n        <input\n          ngModel\n          #password=\"ngModel\"\n          matInput\n          placeholder=\"Password\"\n          value=\"\"\n          type=\"password\"\n          required\n          name=\"passwordField\"\n          autofocus\n        >\n        <mat-error *ngIf=\"password.invalid && password.errors.required\">\n          Enter a valid password.\n        </mat-error>\n      </mat-form-field>\n      <br>\n      <mat-form-field class=\"match-parent-width\">\n        <input\n          ngModel\n          #confirmPassword=\"ngModel\"\n          matInput\n          placeholder=\"Confirm Password\"\n          value=\"\"\n          type=\"password\"\n          required\n          name=\"confirmPasswordField\"\n        >\n        <mat-error *ngIf=\"confirmPassword.invalid && confirmPassword.errors.required\">\n          Confirm your password.\n        </mat-error>\n      </mat-form-field>\n    </form>\n\n    <br>\n    <button (click)=\"onResetPassword(password.value, confirmPassword.value)\" mat-raised-button color=\"primary\" class=\"match-parent-width mat-display-3\">Reset Password</button>\n\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/sign-in/sign-in.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/authentication/sign-in/sign-in.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"sign-in-popup\">\r\n\r\n  <mat-card id=\"sign-in-popup-card\">\r\n    <div id=\"sign-in-title\" class=\"mat-display-1\">Sign in Eduflow</div>\r\n    <form class=\"example-form\">\r\n      <mat-form-field class=\"match-parent-width\">\r\n        <input\r\n          ngModel\r\n          email\r\n          #email=\"ngModel\"\r\n          matInput\r\n          placeholder=\"Email\"\r\n          value=\"\"\r\n          required\r\n          autofocus\r\n          name=\"emailField\"\r\n        >\r\n        <mat-error *ngIf=\"email.invalid && email.errors.required\">\r\n          Enter a valid email address.\r\n        </mat-error>\r\n      </mat-form-field>\r\n      <br>\r\n      <mat-form-field class=\"match-parent-width\">\r\n        <input\r\n          ngModel\r\n          #password=\"ngModel\"\r\n          matInput\r\n          placeholder=\"Password\"\r\n          value=\"\"\r\n          type=\"password\"\r\n          required\r\n          name=\"passwordField\"\r\n        >\r\n        <mat-error *ngIf=\"email.invalid && email.errors.required\">\r\n          Enter a valid password.\r\n        </mat-error>\r\n      </mat-form-field>\r\n    </form>\r\n\r\n    <br>\r\n    <button (click)=\"onSignIn()\" mat-raised-button color=\"primary\" class=\"match-parent-width mat-display-3\">Sign In</button>\r\n\r\n  </mat-card>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/answer-feed/answer-element/answer-element.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/answer-feed/answer-element/answer-element.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"answer-card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"example-header-image\"></div>\r\n    <mat-card-title style=\"margin-top: -5px\">{{author}}</mat-card-title>\r\n    <mat-card-subtitle>\r\n      <app-shiny-text [value]=\" trophyCount + ' Trophies'\" [fontSize]=\"'15px'\"></app-shiny-text>\r\n    </mat-card-subtitle>\r\n\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <p>\r\n      {{answer}}\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-divider></mat-divider>\r\n  <mat-card-actions>\r\n    <button mat-button (click)=\"toggleUpvote()\">{{upvoteCount}} Upvotes</button>\r\n    <button mat-button (click)=\"showAnswerDiscussions()\">{{discussionCount}} Discussions</button>\r\n    <button mat-button (click)=\"toggleReply()\">{{replyValue}}</button>\r\n    <span style=\"font-size: small; float: right; margin-top: 10px;\">{{lastEdited}}</span>\r\n    <span (click)=\"reportToggle()\" [className]=\"reported ? 'post-report-button report-button' : 'pre-report-button report-button'\">\r\n      {{reported ? 'Undo Report Answer' : 'Report Answer'}}\r\n    </span>\r\n  </mat-card-actions>\r\n  <div *ngIf=\"showDiscussions\" style=\"margin-top: -8px\">\r\n    <div *ngIf=\"showCommentBox\" style=\"margin-bottom: 50px; margin-left: 10px;\">\r\n      <mat-form-field class=\"full-width\">\r\n        <textarea [(ngModel)]=\"commentText\" matInput placeholder=\"Leave a comment\"></textarea>\r\n      </mat-form-field>\r\n      <button\r\n        style=\"float: right\"\r\n        (click)=\"postDiscussionComment()\"\r\n        mat-flat-button\r\n        color=\"primary\">\r\n        Post Comment\r\n      </button>\r\n      <div style=\"float: right; margin-right: 20px; margin-top: -4px;\">\r\n        <div>\r\n          <mat-form-field class=\"remove-underline\">\r\n            <mat-label>Show my name as</mat-label>\r\n            <mat-select (selectionChange)=\"onSelectionChangedAnonymityLevel($event)\" [(ngModel)]=\"defaultAnonymityScope\" class=\"awesome-select default-padding\">\r\n              <mat-option *ngFor=\"let option of anonymityScope\" [value]=\"option.id\">\r\n                {{option.viewValue}}\r\n              </mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <app-discussion-feed></app-discussion-feed>\r\n  </div>\r\n</mat-card>\r\n\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/answer-feed/answer-feed/answer-feed.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/answer-feed/answer-feed/answer-feed.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-answer-element\n  *ngFor=\"let answer of answerFeedOfPost\"\n  [answer]=\"answer.answer\"\n  [discussionCount]=\"answer.discussionCount\"\n  [lastEdited]=\"answer.lastEdited\"\n  [authorDisplayImage]=\"answer.authorDisplayImage\"\n  [parentPostId]=\"answer.parentPostId\"\n  [upvoted]=\"answer.upvoted\"\n  [upvoteCount]=\"answer.upvoteCount\"\n  [author]=\"answer.authorDisplayName\"\n  [trophyCount]=\"answer.trophyCount\"\n  [reported]=\"answer.reported\">\n</app-answer-element>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/answer-feed/discussion-feed/discussion-element/discussion-element.component.html":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/answer-feed/discussion-feed/discussion-element/discussion-element.component.html ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <p>{{comment}} ~ <b>{{author}}</b></p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/answer-feed/discussion-feed/discussion-feed/discussion-feed.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/answer-feed/discussion-feed/discussion-feed/discussion-feed.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let comment of commentFeedOfAnswer\">\n  <mat-divider style=\"margin-top: -7px\"></mat-divider>\n  <app-discussion-element\n    [author]=\"comment.authorDisplayName\"\n    [comment]=\"comment.comment\"\n    [dateTimePosted]=\"comment.dateTimePosted\"\n  ></app-discussion-element>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/feed/feed-element/feed-element.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/feed/feed-element/feed-element.component.html ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"example-card\">\r\n  <mat-card-header>\r\n    <div mat-card-avatar class=\"example-header-image\"></div>\r\n    <mat-card-title>{{author}}</mat-card-title>\r\n    <mat-card-subtitle>{{tag}}</mat-card-subtitle>\r\n    <span matTooltip=\"Hide this post\" style=\"position: absolute;right: 20px;\"><mat-chip-list><mat-chip (click)=\"hidePost()\"  style=\"cursor: pointer\"><mat-icon mat-list-icon>report_problem</mat-icon></mat-chip></mat-chip-list></span>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <p>\r\n      {{question}}\r\n    </p>\r\n  </mat-card-content>\r\n  <mat-divider></mat-divider>\r\n  <mat-card-actions>\r\n    <button mat-button (click)=\"toggleUpvote()\">{{upvoteCount}} Upvotes</button>\r\n    <button *ngIf=\"showReplyButton\" mat-button (click)=\"onPostEnter()\">{{replyCount}} Replies</button>\r\n    <span style=\"font-size: small; float: right; margin-top: 10px;\">{{lastActive}}</span>\r\n    <span (click)=\"reportToggle()\" [className]=\"reported ? 'post-report-button report-button' : 'pre-report-button report-button'\">\r\n      {{reported ? 'Undo Report Post' : 'Report Post'}}\r\n    </span>\r\n  </mat-card-actions>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/feed/feed/feed.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/feed/feed/feed.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let post of posts\">\n<app-feed-element\n  [postId]=\"post.postId\"\n  [upvoteCount]=\"post.upvoteCount\"\n  [upvoted]=\"post.upvoted\"\n  [lastActive]=\"post.lastActive\"\n  [replyCount]=\"post.replyCount\"\n  [author]=\"post.author\"\n  [tag]=\"post.tag\"\n  [question]=\"post.question\"\n  [reported]=\"post.flagged\"\n  (enterIntoPostWithPostId)=\"onPostEnterListener($event)\"\n></app-feed-element>\n<br>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/instructor/create-classroom/create-classroom.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/instructor/create-classroom/create-classroom.component.html ***!
  \******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\n  <h1 class=\"mat-h1\" style=\"margin-top: -5px\">Create a new classroom</h1>\n\n  <form>\n    <mat-form-field>\n      <input #className name=\"className\" matInput placeholder=\"Class Name\" >\n    </mat-form-field>\n    <mat-form-field style=\"margin-left: 30px\">\n      <input #classId name=\"classId\" matInput placeholder=\"Class Id\">\n    </mat-form-field>\n    <br>\n    <mat-form-field style=\"width: 400px;\">\n      <textarea #classDescription name=\"classDescription\" matInput placeholder=\"Class Description\"></textarea>\n    </mat-form-field>\n  </form>\n\n  <button\n    (click)=\"createNewClass(className.value, classId.value, classDescription.value)\"\n    class=\"\"\n    mat-flat-button\n    color=\"primary\"\n    style=\"margin-top: 15px\">\n    Create Class\n  </button>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/instructor/manage/manage-classroom-instructors/manage-classroom-instructors.component.html":
/*!*************************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/instructor/manage/manage-classroom-instructors/manage-classroom-instructors.component.html ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngFor=\"let e of selectedUserIdsList\" style=\"display: inline-block\"><span>{{e}}</span></div>-->\n\n<div style=\"display: flex;\">\n\n  <mat-card class=\"example-card\">\n    <mat-card-header>\n      <div mat-card-avatar class=\"example-header-image\"></div>\n      <mat-card-title>Instructor's Dashboard</mat-card-title>\n      <mat-card-subtitle>This Dashboard helps manage instructors.</mat-card-subtitle>\n    </mat-card-header>\n    <mat-divider></mat-divider>\n\n    <div id=\"classes\">\n      <mat-list *ngFor=\"let categoryGroup of categoryGroups\">\n        <h3 mat-subheader>{{categoryGroup.categoryGroupName}}</h3>\n        <mat-list-item *ngFor=\"let singleCategory of categoryGroup.category\" (click)=\"selectCategory(singleCategory.categoryId)\" matRipple style=\"margin-left: 10px;height: 30px; padding: 10px;\">\n          <h4 mat-line>{{singleCategory.categoryName}}</h4>\n        </mat-list-item>\n      </mat-list>\n    </div>\n  </mat-card>\n\n  <mat-card style=\"width: 600px; margin-left: 30px\">\n    <div style=\"display: flex\">\n      <mat-card-header>\n        <mat-card-title>Showing All Instructor</mat-card-title>\n        <mat-card-subtitle><b>{{categoryName}}</b></mat-card-subtitle>\n      </mat-card-header>\n\n      <button\n        (click)=\"selectAllInstructorsOfCurrentCategoryId()\"\n        mat-flat-button\n        color=\"primary\"\n        style=\"margin-left: 15px; height: 45px; float: right\">\n        Select All\n      </button>\n      <button\n        (click)=\"unselectInstructorsOfCurrentGroupId()\"\n        autofocus\n        mat-flat-button\n        color=\"primary\"\n        style=\"margin-left: 15px; height: 45px; float: right\">\n        Select None\n      </button>\n      <button\n        (click)=\"updateSelectedInstructors()\"\n        autofocus\n        mat-flat-button\n        color=\"primary\"\n        style=\"margin-left: 15px; height: 45px; float: right\">\n        Finalize\n      </button>\n    </div>\n    <mat-divider></mat-divider>\n\n    <div>\n      <mat-list>\n        <app-select-user-element\n          *ngFor=\"let instructor of selectableInstructorList\"\n          [userId]=\"instructor.userId\"\n          [userName]=\"instructor.fullName\"\n          [isChecked]=\"instructor.selected\"\n          [userProfilePicture]=\"instructor.profilePicture\">\n        </app-select-user-element>\n      </mat-list>\n    </div>\n\n  </mat-card>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/instructor/manage/manage-classroom-students/manage-classroom-students.component.html":
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/instructor/manage/manage-classroom-students/manage-classroom-students.component.html ***!
  \*******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div *ngFor=\"let e of selectedUserIdsList\" style=\"display: inline-block\"><span>{{e}}</span></div>-->\n\n<div style=\"display: flex;\">\n\n<mat-card class=\"example-card\">\n  <mat-card-header>\n    <div mat-card-avatar class=\"example-header-image\"></div>\n    <mat-card-title>Students Dashboard</mat-card-title>\n    <mat-card-subtitle>This Dashboard helps manage students.</mat-card-subtitle>\n  </mat-card-header>\n  <mat-divider></mat-divider>\n\n  <div id=\"classes\">\n    <mat-list *ngFor=\"let categoryGroup of categoryGroups\">\n      <h3 mat-subheader>{{categoryGroup.categoryGroupName}}</h3>\n      <mat-list-item *ngFor=\"let singleCategory of categoryGroup.category\" (click)=\"selectCategory(singleCategory.categoryId)\" matRipple style=\"margin-left: 10px;height: 30px; padding: 10px;\">\n        <h4 mat-line>{{singleCategory.categoryName}}</h4>\n      </mat-list-item>\n    </mat-list>\n  </div>\n</mat-card>\n\n<mat-card style=\"width: 600px; margin-left: 30px\">\n  <div style=\"display: flex\">\n    <mat-card-header>\n      <mat-card-title>Showing All Students</mat-card-title>\n      <mat-card-subtitle><b>{{categoryName}}</b></mat-card-subtitle>\n    </mat-card-header>\n\n    <button\n      (click)=\"selectAllStudentsOfCurrentCategoryId()\"\n      mat-flat-button\n      color=\"primary\"\n      style=\"margin-left: 15px; height: 45px; float: right\">\n      Select All\n    </button>\n    <button\n      (click)=\"unselectStudentsOfCurrentGroupId()\"\n      autofocus\n      mat-flat-button\n      color=\"primary\"\n      style=\"margin-left: 15px; height: 45px; float: right\">\n      Select None\n    </button>\n    <button\n      (click)=\"updateSelectedStudents()\"\n      autofocus\n      mat-flat-button\n      color=\"primary\"\n      style=\"margin-left: 15px; height: 45px; float: right\">\n      Finalize\n    </button>\n  </div>\n  <mat-divider></mat-divider>\n\n  <div>\n    <mat-list>\n      <app-select-user-element\n        *ngFor=\"let student of selectableStudentList\"\n        [userId]=\"student.userId\"\n        [userName]=\"student.fullName\"\n        [isChecked]=\"student.selected\"\n        [userProfilePicture]=\"student.profilePicture\">\n      </app-select-user-element>\n    </mat-list>\n  </div>\n\n</mat-card>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/instructor/manage/select-user-element/select-user-element.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/instructor/manage/select-user-element/select-user-element.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item  matRipple style=\"height: 50px; display: flex;\">\n\n\n  <mat-checkbox [checked]=\"isChecked\" [(ngModel)]=\"isChecked\" (change)=\"selectUser(isChecked)\"></mat-checkbox>\n\n  <img\n    src=\"{{userProfilePicture}}\"\n    style=\"\n            border-radius: 50%;\n            width: 40px;\n            height: 40px;\n            margin-left: 20px;\">\n  <p style=\"margin-left: 20px;\">{{userName}}</p>\n<!--  <p style=\"margin-left: 20px;\">{{temp}}</p>-->\n<!--  <p style=\"margin-left: 20px;\">IsChecked => {{isChecked}}</p>-->\n</mat-list-item>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/main/main.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/main/main.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-sign-in *ngIf=\"!isSignedIn\" (successfullySignedIn)=\"onSuccessfullySignedIn()\"></app-sign-in>\n<mat-sidenav-container *ngIf=\"isSignedIn\" class=\"example-container\" style=\"min-height: 100vh\">\n  <mat-sidenav mode=\"side\" opened class=\"side-bar-responsive-status\">\n    <app-sidebar\n      (WantToCreateANewClass)=\"createNewClass()\"\n      (EnterClass)=\"enterClass($event)\"\n    >\n    </app-sidebar>\n  </mat-sidenav>\n\n  <mat-sidenav-content>\n    <mat-toolbar class=\"toolbar-style\">\n      <mat-icon\n        id=\"back-button\"\n        matTooltip=\"Goto Home Page\"\n        (click)=\"OnPostExitListener()\"\n        [style.display]=\"currentView != 'POSTS' ? 'block' : 'none'\"\n        class=\"example-icon\"\n        aria-hidden=\"false\"\n        aria-label=\"Example user verified icon\">\n        arrow_back\n      </mat-icon>\n      <span  style=\"margin-left: 10px;\">Eduflow.io</span>\n\n      <mat-icon\n        [matMenuTriggerFor]=\"menu\"\n        id=\"intructor-settings\"\n        matTooltip=\"Instructor Settings\"\n        class=\"example-icon\"\n        aria-hidden=\"false\"\n        style=\"position: absolute; right: 0; margin-right: 30px; cursor: pointer;\">\n        group\n      </mat-icon>\n    </mat-toolbar>\n    <div id=\"paded-environment\" style=\"padding: 20px;\">\n      <div id=\"posts-view\" *ngIf=\"currentView == 'POSTS'\">\n        <app-search-and-filters (askAQuestion)=\"onWantToQuestion()\"></app-search-and-filters>\n        <app-feed\n          (enterIntoPostWithPostId)=\"onPostEnterListener($event)\"\n          [classId]=\"1\"\n        ></app-feed>\n      </div>\n      <div id=\"single-post-view\" *ngIf=\"currentView == 'SINGLE_POST'\">\n        <app-single-question-with-answers [postId]=\"lastViewedPostId.toString()\"></app-single-question-with-answers>\n      </div>\n      <div id=\"ask-a-question-view\" *ngIf=\"currentView == 'ASK_A_QUESTION'\">\n        <app-post-question></app-post-question>\n      </div>\n      <div id=\"create-new-class-view\" *ngIf=\"currentView == 'CREATE_A_CLASS'\">\n        <app-create-classroom (proceedToAddStudentsToNewClassroom)=\"gotoScreenAddStudentsToClassroom()\"></app-create-classroom>\n      </div>\n      <div id=\"manage-classroom-students-view\" *ngIf=\"currentView == 'MANAGE_CLASSROOM_STUDENTS'\">\n        <app-manage-classroom-students (gotoHomePage)=\"OnGotoAllPosts()\"></app-manage-classroom-students>\n      </div>\n      <div id=\"manage-classroom-instructors-view\" *ngIf=\"currentView == 'MANAGE_CLASSROOM_INSTRUCTORS'\">\n        <app-manage-classroom-instructors (gotoHomePage)=\"OnGotoAllPosts()\"></app-manage-classroom-instructors>\n      </div>\n    </div>\n\n  </mat-sidenav-content>\n\n</mat-sidenav-container>\n\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item (click)=\"gotoManageStudentsOfCurrentClassroom()\">Manage MAT 102 Classroom</button>\n  <button mat-menu-item (click)=\"gotoManageInstructorsOfCurrentChosenClassroom()\">Manage MAT 102 Instructors</button>\n</mat-menu>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/post-question/post-question.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/post-question/post-question.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\r\n\r\n  <h1 class=\"mat-h1\" style=\"margin-top: -5px\">Post a question</h1>\r\n\r\n  <div class=\"inline-elements\">\r\n    <div>\r\n      <mat-form-field >\r\n        <mat-label>Show my name as</mat-label>\r\n        <mat-select (selectionChange)=\"onSelectionChangedAnonymityLevel($event)\" [(ngModel)]=\"defaultAnonymityScope\" class=\"awesome-select default-padding\">\r\n          <mat-option *ngFor=\"let option of anonymityScope\" [value]=\"option.id\">\r\n            {{option.viewValue}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"inline-element-margin-left\">\r\n      <mat-form-field >\r\n        <mat-label>Class To Post</mat-label>\r\n        <mat-select (selectionChange)=\"onSelectionChangedGroup($event)\" [(ngModel)]=\"defaultGroup\" class=\"awesome-select default-padding\">\r\n          <mat-option *ngFor=\"let option of classes\" [value]=\"option.id\">\r\n            {{option.viewValue}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"inline-element-margin-left\">\r\n      <mat-form-field >\r\n        <mat-label>Question Tag</mat-label>\r\n        <mat-select (selectionChange)=\"onTagChangedGroup($event)\" [(ngModel)]=\"selectedTagId\" class=\"awesome-select default-padding\">\r\n          <mat-option *ngFor=\"let tag of getTagsOfAChosenClass()\" [value]=\"tag.id\">\r\n            {{tag.tagName}}\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <app-ngx-editor\r\n    [placeholder]=\"'Ask away ...'\"\r\n    [spellcheck]=\"true\"\r\n    [minHeight]=\"'200px'\"\r\n    [width]=\"'650px'\"\r\n    [(ngModel)]=\"htmlContent\"\r\n  ></app-ngx-editor>\r\n\r\n  <div class=\"inline-elements\">\r\n    <button\r\n      (click)=\"saveDraft()\"\r\n      mat-flat-button\r\n      color=\"accent\"\r\n      style=\"margin-top: 15px\">\r\n      Save Question To Draft\r\n    </button>\r\n    <button\r\n      (click)=\"postQuestion()\"\r\n      class=\"inline-element-margin-left-2\"\r\n      mat-flat-button\r\n      color=\"primary\"\r\n      style=\"margin-top: 15px\">\r\n      Post as {{getAnonymityScopeNameFromChosenAnonymityScopeId()}} To {{getClassNameFromChosenClassId()}}\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/search-and-filters/search-and-filters.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/search-and-filters/search-and-filters.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"search-bar\" class=\"match-parent-width-modified-2\">\n  <mat-form-field appearance=\"outline\">\n    <mat-icon matPrefix >search</mat-icon>\n    <mat-label>Search Question</mat-label>\n    <input autocomplete=\"off\" matInput placeholder=\"Search a question, become smarter.\">\n  </mat-form-field>\n</div>\n\n<div class=\"three-elements\">\n\n  <div>\n    <mat-form-field class=\"remove-underline\">\n      <mat-select [(ngModel)]=\"defaultPostType\" class=\"awesome-select default-padding\">\n        <mat-option *ngFor=\"let option of postType\" [value]=\"option.value\">\n          {{option.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div class=\"left-margin-select\">\n    <mat-form-field class=\"remove-underline\">\n      <mat-select [(ngModel)]=\"defaultSortType\" class=\"awesome-select default-padding\">\n        <mat-option *ngFor=\"let option of sortType\" [value]=\"option.value\">\n          {{option.viewValue}}\n        </mat-option>\n      </mat-select>\n    </mat-form-field>\n  </div>\n\n  <div class=\"left-margin-select AAQ-margin\">\n    <button (click)=\"emitAskAQuestionEvent()\" mat-raised-button color=\"primary\">Ask A Question</button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/main/single-question-with-answers/single-question-with-answers.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/main/single-question-with-answers/single-question-with-answers.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-feed-element\r\n  [postId]=\"theQuestion.postId\"\r\n  [upvoteCount]=\"theQuestion.upvoteCount\"\r\n  [upvoted]=\"theQuestion.upvoted\"\r\n  [lastActive]=\"theQuestion.lastActive\"\r\n  [author]=\"theQuestion.author\"\r\n  [tag]=\"theQuestion.tag\"\r\n  [question]=\"theQuestion.question\"\r\n  [showReplyButton]=\"false\"\r\n></app-feed-element>\r\n\r\n<mat-card id=\"post-an-answer\" style=\"max-width: 600px; margin-top: 10px\">\r\n  <div>\r\n    <span>Post an answer</span>\r\n    <span style=\"float: right; cursor: pointer;\" (click)=\"toggleShowAnswerBar()\"><mat-icon mat-list-icon>question_answer</mat-icon></span>\r\n  </div>\r\n  <div style=\"margin-top: 20px\" *ngIf=\"showAnswerBar\">\r\n    <div>\r\n      <div>\r\n        <mat-form-field >\r\n          <mat-label>Show my name as</mat-label>\r\n          <mat-select (selectionChange)=\"onSelectionChangedAnonymityLevel($event)\" [(ngModel)]=\"defaultAnonymityScope\" class=\"awesome-select default-padding\">\r\n            <mat-option *ngFor=\"let option of anonymityScope\" [value]=\"option.id\">\r\n              {{option.viewValue}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n\r\n    <app-ngx-editor\r\n      [placeholder]=\"'Answer To Strengthen Your Learning ...'\"\r\n      [spellcheck]=\"true\"\r\n      [minHeight]=\"'200px'\"\r\n      [width]=\"'550px'\"\r\n      [(ngModel)]=\"htmlContent\"\r\n    ></app-ngx-editor>\r\n\r\n    <div class=\"inline-elements\">\r\n      <button\r\n        (click)=\"postAnswer()\"\r\n        class=\"inline-element-margin-left-2\"\r\n        mat-flat-button\r\n        color=\"primary\"\r\n        style=\"margin-top: 15px\">\r\n        Post as {{getAnonymityScopeNameFromChosenAnonymityScopeId()}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</mat-card>\r\n\r\n<app-answer-feed></app-answer-feed>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/pages/sidebar/sidebar.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/pages/sidebar/sidebar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"coloured-box\" style=\"background-color: #d9145f; min-width: 250px;\">\r\n  <div id=\"profile-picture\">\r\n    <img\r\n      src=\"https://www.w3schools.com/howto/img_avatar.png\"\r\n      alt=\"Avatar\"\r\n      class=\"rounded-picture\">\r\n  </div>\r\n\r\n  <div id=\"text-1\">\r\n    Rahul Ravindran\r\n  </div>\r\n\r\n  <div id=\"text-2\">\r\n    Rahulravindran.in@gmail.com\r\n  </div>\r\n\r\n</div>\r\n<br>\r\n<div id=\"classes\">\r\n  <mat-list>\r\n    <h3 mat-subheader>My Classrooms</h3>\r\n    <mat-list-item *ngFor=\"let a_class of classes\" matRipple (click)=\"emitEnterClass(a_class.name)\">\r\n      <mat-icon mat-list-icon>class</mat-icon>\r\n      <h4 mat-line>{{a_class.name}}</h4>\r\n      <p mat-line> {{a_class.lastActivity | date}} </p>\r\n    </mat-list-item>\r\n  </mat-list>\r\n  <mat-divider></mat-divider>\r\n  <mat-list>\r\n    <h3 mat-subheader>Settings</h3>\r\n    <mat-list-item matRipple (click)=\"emitWantToCreateANewClass()\">\r\n      <mat-icon mat-list-icon>school</mat-icon>\r\n      <h4 mat-line>Create a Class</h4>\r\n    </mat-list-item>\r\n  </mat-list>\r\n</div>\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/utility/shiny-text/shiny-text.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/utility/shiny-text/shiny-text.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class=\"shiny\">\n  <span class=\"inner-shiny\" [ngStyle]=\"{'fontSize': fontSize}\">{{value}}</span>\n</span>\n"

/***/ }),

/***/ "./src/app/Modals/CreateClassModal.ts":
/*!********************************************!*\
  !*** ./src/app/Modals/CreateClassModal.ts ***!
  \********************************************/
/*! exports provided: CreateClassModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClassModal", function() { return CreateClassModal; });
class CreateClassModal {
    constructor(groupName, groupCode, groupDescription, userId, userTypeId) {
        this.group_name = groupName;
        this.group_code = groupCode;
        this.group_description = groupDescription;
        this.user_id = userId;
        this.user_type_id = userTypeId;
    }
}
CreateClassModal.ctorParameters = () => [
    { type: String },
    { type: String },
    { type: String },
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/Modals/StudentClassroomManagement/StudentClassroomManagementGetDataModal.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/Modals/StudentClassroomManagement/StudentClassroomManagementGetDataModal.ts ***!
  \*********************************************************************************************/
/*! exports provided: StudentClassroomManagementGetDataModal */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentClassroomManagementGetDataModal", function() { return StudentClassroomManagementGetDataModal; });
class StudentClassroomManagementGetDataModal {
    constructor(organizationId, groupId) {
        this.organization_id = organizationId;
        this.group_id = groupId;
    }
}
StudentClassroomManagementGetDataModal.ctorParameters = () => [
    { type: String },
    { type: String }
];


/***/ }),

/***/ "./src/app/Shared/api-manager.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Shared/api-manager.service.ts ***!
  \***********************************************/
/*! exports provided: RequestType, ApiManagerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RequestType", function() { return RequestType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiManagerService", function() { return ApiManagerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var json_object_mapper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! json-object-mapper */ "./node_modules/json-object-mapper/dist/ObjectMapper.js");
/* harmony import */ var json_object_mapper__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(json_object_mapper__WEBPACK_IMPORTED_MODULE_5__);






var RequestType;
(function (RequestType) {
    RequestType[RequestType["bQuery"] = 0] = "bQuery";
    RequestType[RequestType["bController"] = 1] = "bController";
})(RequestType || (RequestType = {}));
let ApiManagerService = class ApiManagerService {
    constructor(http) {
        this.http = http;
        this.protocol = 'http://';
        this.ip = 'backendless.io/';
        this.commonFolder = 'user/';
        this.user = 'ceac10a0309e60457d2567b349fa872bc913dc2958b9b0a86052f8a2c0752e6e/';
        this.bApi = 'api/70edcc9efa97c30/';
        this.bController = 'logix/70edcc9efa97c30/';
        this.base = this.protocol + this.ip + this.commonFolder + this.user;
        this.apiBase = this.base + this.bApi;
        this.controllerBase = this.base + this.bController;
        this.onCallbackReceived = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        // Api List
        this.createGroup = 'Create_Group.php';
        // Logix List
        this.createClassroom = 'Classroom/c4ad7/CreateClassroom.php';
        this.getManageClassroomData = 'Classroom/c4ad7/GetAllManageClassroomStudentData.php';
    }
    sendBQueryPostRequest(topic, api, payload) {
        this.sendPostRequest(topic, api, RequestType.bQuery, payload);
    }
    sendBControllerPostRequest(topic, api, payload) {
        this.sendPostRequest(topic, api, RequestType.bController, payload);
    }
    sendPostRequest(topic, api, requestType, payload) {
        let finalApi;
        switch (requestType) {
            case RequestType.bQuery:
                finalApi = this.apiBase + api;
                break;
            case RequestType.bController:
                finalApi = this.controllerBase + api;
                break;
        }
        let stringObject;
        if (payload === undefined) {
            stringObject = '';
        }
        else {
            stringObject = json_object_mapper__WEBPACK_IMPORTED_MODULE_5__["ObjectMapper"].serialize(payload);
        }
        console.log(stringObject);
        this.http
            .post(finalApi, stringObject)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            return response.json();
        }))
            .subscribe((transformedData) => {
            this.onCallbackReceived.next({
                topic,
                data: transformedData
            });
        });
    }
};
ApiManagerService.ctorParameters = () => [
    { type: _angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"] }
];
ApiManagerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ApiManagerService);



/***/ }),

/***/ "./src/app/Shared/chosen-users.service.ts":
/*!************************************************!*\
  !*** ./src/app/Shared/chosen-users.service.ts ***!
  \************************************************/
/*! exports provided: ChosenUsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChosenUsersService", function() { return ChosenUsersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ChosenUsersService = class ChosenUsersService {
    constructor() {
        this.chosenUserIds = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([]);
        this.currentList = this.chosenUserIds.asObservable();
    }
    updateChosenUserList(updatedChosenUserList) {
        this.chosenUserIds.next(updatedChosenUserList);
    }
    addToChosenUserList(UserId) {
        let updated = this.chosenUserIds.getValue();
        if (updated.indexOf(UserId) === -1) {
            updated.push(UserId);
        }
        this.updateChosenUserList(updated);
    }
    removeFromChosenUserList(UserId) {
        let updated = this.chosenUserIds.getValue();
        const indexToRemove = updated.indexOf(UserId);
        delete updated[indexToRemove];
        this.updateChosenUserList(updated);
    }
    clearSlate() {
        this.updateChosenUserList([]);
    }
};
ChosenUsersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ChosenUsersService);



/***/ }),

/***/ "./src/app/_playground/responsive-design/responsive-design.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/_playground/responsive-design/responsive-design.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19wbGF5Z3JvdW5kL3Jlc3BvbnNpdmUtZGVzaWduL3Jlc3BvbnNpdmUtZGVzaWduLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/_playground/responsive-design/responsive-design.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/_playground/responsive-design/responsive-design.component.ts ***!
  \******************************************************************************/
/*! exports provided: ResponsiveDesignComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveDesignComponent", function() { return ResponsiveDesignComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ResponsiveDesignComponent = class ResponsiveDesignComponent {
};
ResponsiveDesignComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-responsive-design',
        template: __webpack_require__(/*! raw-loader!./responsive-design.component.html */ "./node_modules/raw-loader/index.js!./src/app/_playground/responsive-design/responsive-design.component.html"),
        styles: [__webpack_require__(/*! ./responsive-design.component.css */ "./src/app/_playground/responsive-design/responsive-design.component.css")]
    })
], ResponsiveDesignComponent);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'Angular';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm2015/checkbox.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm2015/snack-bar.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm2015/select.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _pages_authentication_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/authentication/sign-in/sign-in.component */ "./src/app/pages/authentication/sign-in/sign-in.component.ts");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/esm2015/drag-drop.js");
/* harmony import */ var _pages_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/sidebar/sidebar.component */ "./src/app/pages/sidebar/sidebar.component.ts");
/* harmony import */ var _pages_main_main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/main/main/main.component */ "./src/app/pages/main/main/main.component.ts");
/* harmony import */ var _pages_main_search_and_filters_search_and_filters_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/main/search-and-filters/search-and-filters.component */ "./src/app/pages/main/search-and-filters/search-and-filters.component.ts");
/* harmony import */ var _pages_main_feed_feed_feed_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/main/feed/feed/feed.component */ "./src/app/pages/main/feed/feed/feed.component.ts");
/* harmony import */ var _pages_main_feed_feed_element_feed_element_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/main/feed/feed-element/feed-element.component */ "./src/app/pages/main/feed/feed-element/feed-element.component.ts");
/* harmony import */ var _pages_main_post_question_post_question_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/main/post-question/post-question.component */ "./src/app/pages/main/post-question/post-question.component.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-editor */ "./node_modules/ngx-editor/fesm2015/ngx-editor.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _pages_main_single_question_with_answers_single_question_with_answers_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./pages/main/single-question-with-answers/single-question-with-answers.component */ "./src/app/pages/main/single-question-with-answers/single-question-with-answers.component.ts");
/* harmony import */ var _pages_main_answer_feed_answer_element_answer_element_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./pages/main/answer-feed/answer-element/answer-element.component */ "./src/app/pages/main/answer-feed/answer-element/answer-element.component.ts");
/* harmony import */ var _pages_main_answer_feed_answer_feed_answer_feed_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/main/answer-feed/answer-feed/answer-feed.component */ "./src/app/pages/main/answer-feed/answer-feed/answer-feed.component.ts");
/* harmony import */ var _utility_shiny_text_shiny_text_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./utility/shiny-text/shiny-text.component */ "./src/app/utility/shiny-text/shiny-text.component.ts");
/* harmony import */ var _pages_main_answer_feed_discussion_feed_discussion_feed_discussion_feed_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/main/answer-feed/discussion-feed/discussion-feed/discussion-feed.component */ "./src/app/pages/main/answer-feed/discussion-feed/discussion-feed/discussion-feed.component.ts");
/* harmony import */ var _pages_main_answer_feed_discussion_feed_discussion_element_discussion_element_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/main/answer-feed/discussion-feed/discussion-element/discussion-element.component */ "./src/app/pages/main/answer-feed/discussion-feed/discussion-element/discussion-element.component.ts");
/* harmony import */ var _pages_main_instructor_create_classroom_create_classroom_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/main/instructor/create-classroom/create-classroom.component */ "./src/app/pages/main/instructor/create-classroom/create-classroom.component.ts");
/* harmony import */ var _pages_main_instructor_manage_manage_classroom_students_manage_classroom_students_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/main/instructor/manage/manage-classroom-students/manage-classroom-students.component */ "./src/app/pages/main/instructor/manage/manage-classroom-students/manage-classroom-students.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _pages_main_instructor_manage_manage_classroom_instructors_manage_classroom_instructors_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/main/instructor/manage/manage-classroom-instructors/manage-classroom-instructors.component */ "./src/app/pages/main/instructor/manage/manage-classroom-instructors/manage-classroom-instructors.component.ts");
/* harmony import */ var _Shared_chosen_users_service__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./Shared/chosen-users.service */ "./src/app/Shared/chosen-users.service.ts");
/* harmony import */ var _pages_main_instructor_manage_select_user_element_select_user_element_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./pages/main/instructor/manage/select-user-element/select-user-element.component */ "./src/app/pages/main/instructor/manage/select-user-element/select-user-element.component.ts");
/* harmony import */ var _pages_authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/authentication/reset-password/reset-password.component */ "./src/app/pages/authentication/reset-password/reset-password.component.ts");
/* harmony import */ var _playground_responsive_design_responsive_design_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./_playground/responsive-design/responsive-design.component */ "./src/app/_playground/responsive-design/responsive-design.component.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm2015/http.js");





















// tslint:disable-next-line:max-line-length





// tslint:disable-next-line:max-line-length


// tslint:disable-next-line:max-line-length


// tslint:disable-next-line:max-line-length


// tslint:disable-next-line:max-line-length




let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _pages_authentication_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_11__["SignInComponent"],
            _pages_authentication_reset_password_reset_password_component__WEBPACK_IMPORTED_MODULE_33__["ResetPasswordComponent"],
            _pages_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
            _pages_main_main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
            _pages_main_search_and_filters_search_and_filters_component__WEBPACK_IMPORTED_MODULE_15__["SearchAndFiltersComponent"],
            _pages_main_feed_feed_feed_component__WEBPACK_IMPORTED_MODULE_16__["FeedComponent"],
            _pages_main_feed_feed_element_feed_element_component__WEBPACK_IMPORTED_MODULE_17__["FeedElementComponent"],
            _pages_main_post_question_post_question_component__WEBPACK_IMPORTED_MODULE_18__["PostQuestionComponent"],
            _pages_main_single_question_with_answers_single_question_with_answers_component__WEBPACK_IMPORTED_MODULE_21__["SingleQuestionWithAnswersComponent"],
            _pages_main_answer_feed_answer_element_answer_element_component__WEBPACK_IMPORTED_MODULE_22__["AnswerElementComponent"],
            _pages_main_answer_feed_answer_feed_answer_feed_component__WEBPACK_IMPORTED_MODULE_23__["AnswerFeedComponent"],
            _utility_shiny_text_shiny_text_component__WEBPACK_IMPORTED_MODULE_24__["ShinyTextComponent"],
            _pages_main_answer_feed_discussion_feed_discussion_feed_discussion_feed_component__WEBPACK_IMPORTED_MODULE_25__["DiscussionFeedComponent"],
            _pages_main_answer_feed_discussion_feed_discussion_element_discussion_element_component__WEBPACK_IMPORTED_MODULE_26__["DiscussionElementComponent"],
            _pages_main_instructor_create_classroom_create_classroom_component__WEBPACK_IMPORTED_MODULE_27__["CreateClassroomComponent"],
            _pages_main_instructor_manage_manage_classroom_students_manage_classroom_students_component__WEBPACK_IMPORTED_MODULE_28__["ManageClassroomStudentsComponent"],
            _pages_main_instructor_manage_select_user_element_select_user_element_component__WEBPACK_IMPORTED_MODULE_32__["SelectUserElementComponent"],
            _pages_main_instructor_manage_manage_classroom_instructors_manage_classroom_instructors_component__WEBPACK_IMPORTED_MODULE_30__["ManageClassroomInstructorsComponent"],
            _playground_responsive_design_responsive_design_component__WEBPACK_IMPORTED_MODULE_34__["ResponsiveDesignComponent"],
        ],
        imports: [
            _angular_http__WEBPACK_IMPORTED_MODULE_35__["HttpModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_5__["MatCheckboxModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_8__["MatSelectModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_10__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_12__["DragDropModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatBadgeModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRippleModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonToggleModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            ngx_editor__WEBPACK_IMPORTED_MODULE_19__["NgxEditorModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_20__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTooltipModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatChipsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_29__["FlexLayoutModule"]
        ],
        providers: [_Shared_chosen_users_service__WEBPACK_IMPORTED_MODULE_31__["ChosenUsersService"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/pages/authentication/reset-password/reset-password.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/pages/authentication/reset-password/reset-password.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#reset-password-popup-card{\r\n  width: 400px;\r\n  height: 300px;\r\n  padding: 50px;\r\n\r\n  /*background-color: #373b82;*/\r\n\r\n  position:absolute;\r\n  left:0; right:0;\r\n  top:0; bottom:0;\r\n  margin:auto;\r\n\r\n  /*this to solve \"the content will not be cut when the window is smaller than the content\": */\r\n  max-width:100%;\r\n  max-height:100%;\r\n  overflow:auto;\r\n}\r\n\r\n#reset-password-title{\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vcmVzZXQtcGFzc3dvcmQvcmVzZXQtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTs7RUFFYiw2QkFBNkI7O0VBRTdCLGlCQUFpQjtFQUNqQixNQUFNLEVBQUUsT0FBTztFQUNmLEtBQUssRUFBRSxRQUFRO0VBQ2YsV0FBVzs7RUFFWCw0RkFBNEY7RUFDNUYsY0FBYztFQUNkLGVBQWU7RUFDZixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoZW50aWNhdGlvbi9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI3Jlc2V0LXBhc3N3b3JkLXBvcHVwLWNhcmR7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgcGFkZGluZzogNTBweDtcclxuXHJcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiAjMzczYjgyOyovXHJcblxyXG4gIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gIGxlZnQ6MDsgcmlnaHQ6MDtcclxuICB0b3A6MDsgYm90dG9tOjA7XHJcbiAgbWFyZ2luOmF1dG87XHJcblxyXG4gIC8qdGhpcyB0byBzb2x2ZSBcInRoZSBjb250ZW50IHdpbGwgbm90IGJlIGN1dCB3aGVuIHRoZSB3aW5kb3cgaXMgc21hbGxlciB0aGFuIHRoZSBjb250ZW50XCI6ICovXHJcbiAgbWF4LXdpZHRoOjEwMCU7XHJcbiAgbWF4LWhlaWdodDoxMDAlO1xyXG4gIG92ZXJmbG93OmF1dG87XHJcbn1cclxuXHJcbiNyZXNldC1wYXNzd29yZC10aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/authentication/reset-password/reset-password.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pages/authentication/reset-password/reset-password.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ResetPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetPasswordComponent", function() { return ResetPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let ResetPasswordComponent = class ResetPasswordComponent {
    constructor(snackbar) {
        this.snackbar = snackbar;
        this.successfullyResetPassword = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onResetPassword(password, confirmPassword) {
        const matches = this.passwordValidators(password, confirmPassword);
        if (matches) {
            this.successfullyResetPassword.emit();
            this.showSnackbarMessage('Success');
        }
    }
    passwordValidators(password, confirmPassword) {
        if (password !== confirmPassword) {
            this.showSnackbarMessage('Passwords do not match. ');
            return false;
        }
        if (password.length === 0) {
            this.showSnackbarMessage('Password field cannot be left blank.');
            return false;
        }
        return true;
    }
    showSnackbarMessage(message) {
        this.snackbar.open(message, 'Close', {
            duration: 2000,
        });
    }
};
ResetPasswordComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ResetPasswordComponent.prototype, "successfullyResetPassword", void 0);
ResetPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reset-password',
        template: __webpack_require__(/*! raw-loader!./reset-password.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/reset-password/reset-password.component.html"),
        styles: [__webpack_require__(/*! ./reset-password.component.css */ "./src/app/pages/authentication/reset-password/reset-password.component.css")]
    })
], ResetPasswordComponent);



/***/ }),

/***/ "./src/app/pages/authentication/sign-in/sign-in.component.css":
/*!********************************************************************!*\
  !*** ./src/app/pages/authentication/sign-in/sign-in.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#sign-in-popup-card{\r\n  width: 300px;\r\n  height: 300px;\r\n  padding: 50px;\r\n\r\n  /*background-color: #373b82;*/\r\n\r\n  position:absolute;\r\n  left:0; right:0;\r\n  top:0; bottom:0;\r\n  margin:auto;\r\n\r\n  /*this to solve \"the content will not be cut when the window is smaller than the content\": */\r\n  max-width:100%;\r\n  max-height:100%;\r\n  overflow:auto;\r\n}\r\n\r\n#sign-in-title{\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLGFBQWE7O0VBRWIsNkJBQTZCOztFQUU3QixpQkFBaUI7RUFDakIsTUFBTSxFQUFFLE9BQU87RUFDZixLQUFLLEVBQUUsUUFBUTtFQUNmLFdBQVc7O0VBRVgsNEZBQTRGO0VBQzVGLGNBQWM7RUFDZCxlQUFlO0VBQ2YsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aGVudGljYXRpb24vc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjc2lnbi1pbi1wb3B1cC1jYXJke1xyXG4gIHdpZHRoOiAzMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcblxyXG4gIC8qYmFja2dyb3VuZC1jb2xvcjogIzM3M2I4MjsqL1xyXG5cclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICBsZWZ0OjA7IHJpZ2h0OjA7XHJcbiAgdG9wOjA7IGJvdHRvbTowO1xyXG4gIG1hcmdpbjphdXRvO1xyXG5cclxuICAvKnRoaXMgdG8gc29sdmUgXCJ0aGUgY29udGVudCB3aWxsIG5vdCBiZSBjdXQgd2hlbiB0aGUgd2luZG93IGlzIHNtYWxsZXIgdGhhbiB0aGUgY29udGVudFwiOiAqL1xyXG4gIG1heC13aWR0aDoxMDAlO1xyXG4gIG1heC1oZWlnaHQ6MTAwJTtcclxuICBvdmVyZmxvdzphdXRvO1xyXG59XHJcblxyXG4jc2lnbi1pbi10aXRsZXtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/authentication/sign-in/sign-in.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pages/authentication/sign-in/sign-in.component.ts ***!
  \*******************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SignInComponent = class SignInComponent {
    constructor() {
        this.successfullySignedIn = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    onSignIn() {
        this.successfullySignedIn.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SignInComponent.prototype, "successfullySignedIn", void 0);
SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sign-in',
        template: __webpack_require__(/*! raw-loader!./sign-in.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/authentication/sign-in/sign-in.component.html"),
        styles: [__webpack_require__(/*! ./sign-in.component.css */ "./src/app/pages/authentication/sign-in/sign-in.component.css")]
    })
], SignInComponent);



/***/ }),

/***/ "./src/app/pages/main/answer-feed/answer-element/answer-element.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/pages/main/answer-feed/answer-element/answer-element.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".answer-card {\r\n  max-width: 600px;\r\n  margin-top: 10px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.make-inline { float:left; }\r\n\r\n.clearBoth { clear:both; }\r\n\r\n.full-width {\r\n  width: 100%;\r\n}\r\n\r\n/* Report Related CSS */\r\n\r\n.report-button{\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n  font-size: small;\r\n  float: right;\r\n  margin-top: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.pre-report-button {\r\n\r\n}\r\n\r\n.post-report-button {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9hbnN3ZXItZmVlZC9hbnN3ZXItZWxlbWVudC9hbnN3ZXItZWxlbWVudC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7O0FBRUEsZUFBZSxVQUFVLEVBQUU7O0FBRTNCLGFBQWEsVUFBVSxFQUFFOztBQUV6QjtFQUNFLFdBQVc7QUFDYjs7QUFFQSx1QkFBdUI7O0FBRXZCO0VBQ0UsZUFBZTtFQUNmLDBCQUEwQjtFQUMxQixnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxVQUFVO0FBQ1oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluL2Fuc3dlci1mZWVkL2Fuc3dlci1lbGVtZW50L2Fuc3dlci1lbGVtZW50LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYW5zd2VyLWNhcmQge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4ubWFrZS1pbmxpbmUgeyBmbG9hdDpsZWZ0OyB9XHJcblxyXG4uY2xlYXJCb3RoIHsgY2xlYXI6Ym90aDsgfVxyXG5cclxuLmZ1bGwtd2lkdGgge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4vKiBSZXBvcnQgUmVsYXRlZCBDU1MgKi9cclxuXHJcbi5yZXBvcnQtYnV0dG9ue1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBmb250LXNpemU6IHNtYWxsO1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1yaWdodDogMTBweDtcclxufVxyXG5cclxuLnByZS1yZXBvcnQtYnV0dG9uIHtcclxuXHJcbn1cclxuXHJcbi5wb3N0LXJlcG9ydC1idXR0b24ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/main/answer-feed/answer-element/answer-element.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/pages/main/answer-feed/answer-element/answer-element.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AnswerElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerElementComponent", function() { return AnswerElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let AnswerElementComponent = class AnswerElementComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.showDiscussions = false;
        this.replying = false;
        this.replyValue = 'Reply';
        this.commentText = '';
        this.selectedAnonymityScopeId = 1;
        this.defaultAnonymityScope = '1';
        this.anonymityScope = [
            { id: '0', viewValue: 'Anonymous' },
            { id: '1', viewValue: 'Rahul Ravindran' },
        ];
        this.author = 'Anonymous';
        this.answer = 'The answer to this question is so absurdly simple that I am going' +
            ' to write it in a pretty long sentence on how absurd it is that ' +
            'I am trying to dodge the question to show it\'s absurdness.';
        this.upvoteCount = 4;
        this.discussionCount = 8;
        this.lastEdited = '4 hours ago';
        this.upvoted = false;
        this.showDiscussions = false;
    }
    toggleUpvote() {
        if (this.upvoted) {
            this.upvoted = false;
            this.upvoteCount--;
        }
        else {
            this.upvoted = true;
            this.upvoteCount++;
        }
    }
    showAnswerDiscussions() {
        this.showDiscussions = !this.showDiscussions;
    }
    toggleReply() {
        this.showDiscussions = true;
        this.replying = !this.replying;
        this.showCommentBox = !this.showCommentBox;
        if (!this.replying) {
            this.replyValue = 'Reply';
        }
        else {
            this.replyValue = 'Cancel Reply';
        }
    }
    postDiscussionComment() {
        this.replying = false;
        this.showCommentBox = false;
        this.replyValue = 'Reply';
        this.commentText = '';
        this.openSnackBar('Comment Posted');
    }
    getAnonymityScopeNameFromChosenAnonymityScopeId() {
        for (const anonymityScope of this.anonymityScope) {
            if (anonymityScope.id === this.selectedAnonymityScopeId.toString()) {
                return anonymityScope.viewValue;
            }
        }
    }
    onSelectionChangedAnonymityLevel($event) {
        this.selectedAnonymityScopeId = $event.value;
        this.openSnackBar('You will be posting as ' + this.getAnonymityScopeNameFromChosenAnonymityScopeId());
    }
    openSnackBar(message) {
        this.snackBar.open(message, 'Close', {
            duration: 2000,
        });
    }
    reportToggle() {
        this.reported = !this.reported;
        if (this.reported) {
            this.openSnackBar('Answer Reported.');
        }
        else {
            this.openSnackBar('Undo Report Answer.');
        }
    }
};
AnswerElementComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnswerElementComponent.prototype, "parentPostId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnswerElementComponent.prototype, "upvoted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnswerElementComponent.prototype, "upvoteCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnswerElementComponent.prototype, "discussionCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnswerElementComponent.prototype, "lastEdited", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnswerElementComponent.prototype, "author", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnswerElementComponent.prototype, "answer", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnswerElementComponent.prototype, "authorDisplayImage", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnswerElementComponent.prototype, "trophyCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnswerElementComponent.prototype, "reported", void 0);
AnswerElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-answer-element',
        template: __webpack_require__(/*! raw-loader!./answer-element.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/answer-feed/answer-element/answer-element.component.html"),
        styles: [__webpack_require__(/*! ./answer-element.component.css */ "./src/app/pages/main/answer-feed/answer-element/answer-element.component.css")]
    })
], AnswerElementComponent);



/***/ }),

/***/ "./src/app/pages/main/answer-feed/answer-feed/answer-feed.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/pages/main/answer-feed/answer-feed/answer-feed.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vYW5zd2VyLWZlZWQvYW5zd2VyLWZlZWQvYW5zd2VyLWZlZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/main/answer-feed/answer-feed/answer-feed.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/pages/main/answer-feed/answer-feed/answer-feed.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AnswerFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnswerFeedComponent", function() { return AnswerFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AnswerFeedComponent = class AnswerFeedComponent {
    ngOnInit() {
        this.answerFeedOfPost = this.getAnswerFeedByPostId();
    }
    getAnswerFeedByPostId() {
        // TODO: API CALL HERE ...
        const answerFeedOfPost = [
            {
                answerId: '1',
                answer: 'This is the correct answer',
                authorDisplayImage: '',
                authorDisplayName: 'Anonymous',
                discussionCount: 10,
                discussionId: '1',
                trophyCount: 48,
                upvoteCount: 10,
                lastEdited: 'Yesterday',
                parentPostId: '10',
                upvoted: true,
                reported: false
            },
            {
                answerId: '2',
                answer: 'This is the 2nd best answer',
                authorDisplayImage: '',
                authorDisplayName: 'The Smart Kid',
                discussionCount: 32,
                discussionId: '2',
                trophyCount: 2048,
                upvoteCount: 512,
                lastEdited: '20 min ago',
                parentPostId: '10',
                upvoted: true,
                reported: true
            }
        ];
        return answerFeedOfPost;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], AnswerFeedComponent.prototype, "postId", void 0);
AnswerFeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-answer-feed',
        template: __webpack_require__(/*! raw-loader!./answer-feed.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/answer-feed/answer-feed/answer-feed.component.html"),
        styles: [__webpack_require__(/*! ./answer-feed.component.css */ "./src/app/pages/main/answer-feed/answer-feed/answer-feed.component.css")]
    })
], AnswerFeedComponent);



/***/ }),

/***/ "./src/app/pages/main/answer-feed/discussion-feed/discussion-element/discussion-element.component.css":
/*!************************************************************************************************************!*\
  !*** ./src/app/pages/main/answer-feed/discussion-feed/discussion-element/discussion-element.component.css ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vYW5zd2VyLWZlZWQvZGlzY3Vzc2lvbi1mZWVkL2Rpc2N1c3Npb24tZWxlbWVudC9kaXNjdXNzaW9uLWVsZW1lbnQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/main/answer-feed/discussion-feed/discussion-element/discussion-element.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/pages/main/answer-feed/discussion-feed/discussion-element/discussion-element.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: DiscussionElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionElementComponent", function() { return DiscussionElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DiscussionElementComponent = class DiscussionElementComponent {
    constructor() {
        this.comment = 'This is a fantastic answer and I absolutely endorse this. There is so much to learn from this answer. Hats off to you, Gentleman.';
        this.author = 'Rahul Ravindran';
        this.dateTimePosted = '10 minutes ago';
    }
    ngOnInit() {
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DiscussionElementComponent.prototype, "comment", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DiscussionElementComponent.prototype, "author", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DiscussionElementComponent.prototype, "dateTimePosted", void 0);
DiscussionElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-discussion-element',
        template: __webpack_require__(/*! raw-loader!./discussion-element.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/answer-feed/discussion-feed/discussion-element/discussion-element.component.html"),
        styles: [__webpack_require__(/*! ./discussion-element.component.css */ "./src/app/pages/main/answer-feed/discussion-feed/discussion-element/discussion-element.component.css")]
    })
], DiscussionElementComponent);



/***/ }),

/***/ "./src/app/pages/main/answer-feed/discussion-feed/discussion-feed/discussion-feed.component.css":
/*!******************************************************************************************************!*\
  !*** ./src/app/pages/main/answer-feed/discussion-feed/discussion-feed/discussion-feed.component.css ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vYW5zd2VyLWZlZWQvZGlzY3Vzc2lvbi1mZWVkL2Rpc2N1c3Npb24tZmVlZC9kaXNjdXNzaW9uLWZlZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/main/answer-feed/discussion-feed/discussion-feed/discussion-feed.component.ts":
/*!*****************************************************************************************************!*\
  !*** ./src/app/pages/main/answer-feed/discussion-feed/discussion-feed/discussion-feed.component.ts ***!
  \*****************************************************************************************************/
/*! exports provided: DiscussionFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscussionFeedComponent", function() { return DiscussionFeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DiscussionFeedComponent = class DiscussionFeedComponent {
    constructor() { }
    ngOnInit() {
        this.commentFeedOfAnswer = this.getDiscussionsByAnswerId();
    }
    getDiscussionsByAnswerId() {
        // TODO: API CALL HERE ...
        const discussionFeedOfAnswer = [
            {
                authorDisplayName: 'Anonymous',
                comment: 'This is a sample comment.',
                dateTimePosted: 'A few days ago.'
            },
            {
                authorDisplayName: 'Stan Lee',
                comment: 'Another Comment.',
                dateTimePosted: 'A few years ago.'
            },
            {
                authorDisplayName: 'Captain Marvel',
                comment: 'The first comment.',
                dateTimePosted: 'A few lightyears ago.'
            }
        ];
        return discussionFeedOfAnswer;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], DiscussionFeedComponent.prototype, "answerId", void 0);
DiscussionFeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-discussion-feed',
        template: __webpack_require__(/*! raw-loader!./discussion-feed.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/answer-feed/discussion-feed/discussion-feed/discussion-feed.component.html"),
        styles: [__webpack_require__(/*! ./discussion-feed.component.css */ "./src/app/pages/main/answer-feed/discussion-feed/discussion-feed/discussion-feed.component.css")]
    })
], DiscussionFeedComponent);



/***/ }),

/***/ "./src/app/pages/main/feed/feed-element/feed-element.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/main/feed/feed-element/feed-element.component.css ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n  max-width: 600px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.make-inline { float:left; }\r\n\r\n.clearBoth { clear:both; }\r\n\r\n.report-button{\r\n  cursor: pointer;\r\n  text-decoration: underline;\r\n  font-size: small;\r\n  float: right;\r\n  margin-top: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\n.pre-report-button {\r\n\r\n}\r\n\r\n.post-report-button {\r\n  color: red;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9mZWVkL2ZlZWQtZWxlbWVudC9mZWVkLWVsZW1lbnQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7O0FBRUEsZUFBZSxVQUFVLEVBQUU7O0FBRTNCLGFBQWEsVUFBVSxFQUFFOztBQUd6QjtFQUNFLGVBQWU7RUFDZiwwQkFBMEI7RUFDMUIsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsa0JBQWtCO0FBQ3BCOztBQUVBOztBQUVBOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi9mZWVkL2ZlZWQtZWxlbWVudC9mZWVkLWVsZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWNhcmQge1xyXG4gIG1heC13aWR0aDogNjAwcHg7XHJcbn1cclxuXHJcbi5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCdodHRwczovL21hdGVyaWFsLmFuZ3VsYXIuaW8vYXNzZXRzL2ltZy9leGFtcGxlcy9zaGliYTEuanBnJyk7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxufVxyXG5cclxuLm1ha2UtaW5saW5lIHsgZmxvYXQ6bGVmdDsgfVxyXG5cclxuLmNsZWFyQm90aCB7IGNsZWFyOmJvdGg7IH1cclxuXHJcblxyXG4ucmVwb3J0LWJ1dHRvbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgZm9udC1zaXplOiBzbWFsbDtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgbWFyZ2luLXRvcDogMTBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbi5wcmUtcmVwb3J0LWJ1dHRvbiB7XHJcblxyXG59XHJcblxyXG4ucG9zdC1yZXBvcnQtYnV0dG9uIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/main/feed/feed-element/feed-element.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/main/feed/feed-element/feed-element.component.ts ***!
  \************************************************************************/
/*! exports provided: FeedElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedElementComponent", function() { return FeedElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let FeedElementComponent = class FeedElementComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.enterIntoPostWithPostId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.upvoteCount = 4;
        this.replyCount = 8;
        this.lastActive = '4 hours ago';
        this.upvoted = false;
        this.showReplyButton = true;
    }
    toggleUpvote() {
        if (this.upvoted) {
            this.upvoted = false;
            this.upvoteCount--;
        }
        else {
            this.upvoted = true;
            this.upvoteCount++;
        }
    }
    onPostEnter() {
        this.enterIntoPostWithPostId.emit(this.postId);
    }
    reportToggle() {
        this.reported = !this.reported;
        if (this.reported) {
            this.snackBarCreator('Question Reported');
        }
        else {
            this.snackBarCreator('Undo Report Question');
        }
    }
    // utility functions
    snackBarCreator(message) {
        this.snackBar.open(message, 'Close', {
            duration: 1000,
        });
    }
    hidePost() {
        this.snackBarCreator('Post Has been hidden');
    }
};
FeedElementComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeedElementComponent.prototype, "showReplyButton", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeedElementComponent.prototype, "postId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeedElementComponent.prototype, "upvoted", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeedElementComponent.prototype, "upvoteCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeedElementComponent.prototype, "replyCount", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeedElementComponent.prototype, "lastActive", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeedElementComponent.prototype, "author", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeedElementComponent.prototype, "question", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeedElementComponent.prototype, "tag", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeedElementComponent.prototype, "profilePictureUrl", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeedElementComponent.prototype, "reported", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FeedElementComponent.prototype, "enterIntoPostWithPostId", void 0);
FeedElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed-element',
        template: __webpack_require__(/*! raw-loader!./feed-element.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/feed/feed-element/feed-element.component.html"),
        styles: [__webpack_require__(/*! ./feed-element.component.css */ "./src/app/pages/main/feed/feed-element/feed-element.component.css")]
    })
], FeedElementComponent);



/***/ }),

/***/ "./src/app/pages/main/feed/feed/feed.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/main/feed/feed/feed.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vZmVlZC9mZWVkL2ZlZWQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/pages/main/feed/feed/feed.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/main/feed/feed/feed.component.ts ***!
  \********************************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FeedComponent = class FeedComponent {
    constructor() {
        this.enterIntoPostWithPostId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.posts = [
            {
                postId: 1,
                upvoted: false,
                author: 'Rahul Ravindran',
                lastActive: '8 hours ago',
                profilePictureUrl: '',
                question: 'Why is the Sun yellow?',
                replyCount: 20,
                tag: 'Geo Quiz 2',
                upvoteCount: 38487,
                flagged: false
            },
            {
                postId: 2,
                upvoted: true,
                author: 'Lena Fawaz Mohammad',
                lastActive: 'A few minutes ago',
                profilePictureUrl: '',
                question: 'I just want to clarify, if I want to solve the questions using the ' +
                    '1000 fractions provided, I can just describe what the code would be doing in layman terms ?',
                replyCount: 3,
                tag: 'Problem Set 3',
                upvoteCount: 21,
                flagged: true
            }
        ];
    }
    onPostEnterListener(postId) {
        // Relaying
        this.enterIntoPostWithPostId.emit(postId);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], FeedComponent.prototype, "classId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], FeedComponent.prototype, "enterIntoPostWithPostId", void 0);
FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-feed',
        template: __webpack_require__(/*! raw-loader!./feed.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/feed/feed/feed.component.html"),
        styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/pages/main/feed/feed/feed.component.css")]
    })
], FeedComponent);



/***/ }),

/***/ "./src/app/pages/main/instructor/create-classroom/create-classroom.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/pages/main/instructor/create-classroom/create-classroom.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-full-width {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9pbnN0cnVjdG9yL2NyZWF0ZS1jbGFzc3Jvb20vY3JlYXRlLWNsYXNzcm9vbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbWFpbi9pbnN0cnVjdG9yL2NyZWF0ZS1jbGFzc3Jvb20vY3JlYXRlLWNsYXNzcm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtZnVsbC13aWR0aCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/main/instructor/create-classroom/create-classroom.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/pages/main/instructor/create-classroom/create-classroom.component.ts ***!
  \**************************************************************************************/
/*! exports provided: CreateClassroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateClassroomComponent", function() { return CreateClassroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _Shared_api_manager_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../Shared/api-manager.service */ "./src/app/Shared/api-manager.service.ts");
/* harmony import */ var _Modals_CreateClassModal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../Modals/CreateClassModal */ "./src/app/Modals/CreateClassModal.ts");
var CreateClassroomComponent_1;





let CreateClassroomComponent = CreateClassroomComponent_1 = class CreateClassroomComponent {
    constructor(snackBar, apiManagerService) {
        this.snackBar = snackBar;
        this.apiManagerService = apiManagerService;
        this.proceedToAddStudentsToNewClassroom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
        this.apiCallSubscription = this.apiManagerService.onCallbackReceived.subscribe((callback) => {
            if (callback.topic === CreateClassroomComponent_1.name) {
                this.onClassCreatedCallback(callback.data);
            }
        });
    }
    createNewClass(classname, classId, classDescription) {
        // if ((classname.length === 0) || classDescription.length === 0) {
        //   this.showSnackbarMessage(
        //     'Please fill in both class name and class description'
        //   );
        //   return;
        // }
        this.apiCall(classname, classId, classDescription);
    }
    apiCall(className, classId, classDescription) {
        const api = this.apiManagerService.createClassroom;
        const createClassModal = new _Modals_CreateClassModal__WEBPACK_IMPORTED_MODULE_4__["CreateClassModal"](className, classId, classDescription, '123', '0');
        this.apiManagerService.sendBControllerPostRequest(CreateClassroomComponent_1.name, api, createClassModal);
    }
    onClassCreatedCallback(callBackData) {
        console.log(callBackData);
        this.showSnackbarMessage('Classroom successfully created. Add some students now.');
        // Replace with API success protocol
        if (true) {
            this.proceedToAddStudentsToNewClassroom.emit();
        }
    }
    showSnackbarMessage(message) {
        this.snackBar.open(message, 'Close', {
            duration: 2000,
        });
    }
};
CreateClassroomComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _Shared_api_manager_service__WEBPACK_IMPORTED_MODULE_3__["ApiManagerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], CreateClassroomComponent.prototype, "proceedToAddStudentsToNewClassroom", void 0);
CreateClassroomComponent = CreateClassroomComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-classroom',
        template: __webpack_require__(/*! raw-loader!./create-classroom.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/instructor/create-classroom/create-classroom.component.html"),
        styles: [__webpack_require__(/*! ./create-classroom.component.css */ "./src/app/pages/main/instructor/create-classroom/create-classroom.component.css")]
    })
], CreateClassroomComponent);



/***/ }),

/***/ "./src/app/pages/main/instructor/manage/manage-classroom-instructors/manage-classroom-instructors.component.css":
/*!**********************************************************************************************************************!*\
  !*** ./src/app/pages/main/instructor/manage/manage-classroom-instructors/manage-classroom-instructors.component.css ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9pbnN0cnVjdG9yL21hbmFnZS9tYW5hZ2UtY2xhc3Nyb29tLWluc3RydWN0b3JzL21hbmFnZS1jbGFzc3Jvb20taW5zdHJ1Y3RvcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluL2luc3RydWN0b3IvbWFuYWdlL21hbmFnZS1jbGFzc3Jvb20taW5zdHJ1Y3RvcnMvbWFuYWdlLWNsYXNzcm9vbS1pbnN0cnVjdG9ycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/main/instructor/manage/manage-classroom-instructors/manage-classroom-instructors.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/pages/main/instructor/manage/manage-classroom-instructors/manage-classroom-instructors.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: ManageClassroomInstructorsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageClassroomInstructorsComponent", function() { return ManageClassroomInstructorsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _Shared_chosen_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Shared/chosen-users.service */ "./src/app/Shared/chosen-users.service.ts");




let ManageClassroomInstructorsComponent = class ManageClassroomInstructorsComponent {
    constructor(chosenInstructors, snackBar) {
        this.chosenInstructors = chosenInstructors;
        this.snackBar = snackBar;
        this.gotoHomePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.categoryName = 'Category not yet selected';
        this.currentCategoryId = '-2';
    }
    ngOnInit() {
        this.categoryGroups = this.getInstructorCategories();
        this.chosenInstructors.currentList.subscribe(updatedChosenInstructorsList => this.onInstructorChosenChanged(updatedChosenInstructorsList));
        this.allInstructorNames = this.getAllInstructorNames();
        this.onInitUpdateExistingInstructorsToChosenInstructorsService();
    }
    onInstructorChosenChanged(updatedChosenInstructorList) {
        this.selectedInstructorIdsList = updatedChosenInstructorList;
    }
    selectCategory(categoryId) {
        this.currentCategoryId = categoryId;
        this.selectableInstructorList = this.getInstructorsByCategory(categoryId);
        this.categoryGroups.forEach(categoryGroup => {
            categoryGroup.category.forEach(singleCategory => {
                if (singleCategory.categoryId === categoryId) {
                    this.categoryName = 'Showing ' + singleCategory.categoryName;
                    return;
                }
            });
        });
    }
    getInstructorCategories() {
        // TODO API CALL HERE
        const categoryGroups = [];
        categoryGroups[0] = {
            categoryGroupID: '1',
            categoryGroupName: 'MYP',
            category: [
                {
                    categoryId: '1',
                    categoryName: 'Grade 5'
                },
                {
                    categoryId: '2',
                    categoryName: 'Grade 6'
                },
                {
                    categoryId: '3',
                    categoryName: 'Grade 7'
                },
                {
                    categoryId: '4',
                    categoryName: 'Grade 8'
                }
            ]
        };
        categoryGroups[1] = {
            categoryGroupID: '2',
            categoryGroupName: 'IGCSE',
            category: [
                {
                    categoryId: '5',
                    categoryName: 'Grade 9'
                },
                {
                    categoryId: '6',
                    categoryName: 'Grade 10'
                }
            ]
        };
        categoryGroups[2] = {
            categoryGroupID: '3',
            categoryGroupName: 'IB',
            category: [
                {
                    categoryId: '7',
                    categoryName: 'Grade 11'
                },
                {
                    categoryId: '8',
                    categoryName: 'Grade 12'
                }
            ]
        };
        return categoryGroups;
    }
    getAllInstructorNames() {
        const allElements = [];
        for (const element of this.getInstructorsByCategory('-1')) {
            allElements.push(element.fullName);
        }
        return allElements;
    }
    getInstructorsByCategory(categoryId) {
        console.log(categoryId);
        if (categoryId === '-2') {
            this.snackBarCreator('Choose a category first.');
            return;
        }
        if (categoryId === '-1') {
            // Returning all Instructors
        }
        // TODO API CALL here and dynamic programming for efficiency. Highly inefficient now.
        const selectableInstructor = [];
        selectableInstructor[0] = {
            userId: '1',
            fullName: 'Iron Man',
            profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            selected: false
        };
        selectableInstructor[1] = {
            userId: '2',
            fullName: 'Captain Marvel',
            profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            selected: true
        };
        selectableInstructor[2] = {
            userId: '3',
            fullName: 'Spiderman',
            profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            selected: false
        };
        selectableInstructor[3] = {
            userId: '4',
            fullName: 'Black Widow',
            profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
            selected: false
        };
        return selectableInstructor;
    }
    onInitUpdateExistingInstructorsToChosenInstructorsService() {
        // This means get all Instructors across all categories
        const allInstructors = this.getInstructorsByCategory('-1');
        for (const Instructor of allInstructors) {
            if (Instructor.selected) {
                this.chosenInstructors.addToChosenUserList(Instructor.userId);
            }
        }
    }
    selectAllInstructorsOfCurrentCategoryId() {
        const selectableInstructor = this.getInstructorsByCategory(this.currentCategoryId);
        if (selectableInstructor === undefined) {
            return;
        }
        for (const element of selectableInstructor) {
            this.chosenInstructors.addToChosenUserList(element.userId);
        }
    }
    unselectInstructorsOfCurrentGroupId() {
        const selectableInstructor = this.getInstructorsByCategory(this.currentCategoryId);
        if (selectableInstructor === undefined) {
            return;
        }
        for (const element of selectableInstructor) {
            this.chosenInstructors.removeFromChosenUserList(element.userId);
        }
    }
    updateSelectedInstructors() {
        // todo api call => use selectedInstructorIdsList to remove every Instructors connection and update with new list.
        this.chosenInstructors.clearSlate();
        this.snackBarCreator('Instructor management updated successfully');
        this.gotoHomePage.emit();
    }
    makeString(length) {
        let result = '';
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    makeId(length) {
        let result = '';
        const characters = '0123456789';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }
    snackBarCreator(message) {
        this.snackBar.open(message, 'Close', {
            duration: 1000,
        });
    }
};
ManageClassroomInstructorsComponent.ctorParameters = () => [
    { type: _Shared_chosen_users_service__WEBPACK_IMPORTED_MODULE_3__["ChosenUsersService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ManageClassroomInstructorsComponent.prototype, "classroomId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ManageClassroomInstructorsComponent.prototype, "gotoHomePage", void 0);
ManageClassroomInstructorsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-classroom-instructors',
        template: __webpack_require__(/*! raw-loader!./manage-classroom-instructors.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/instructor/manage/manage-classroom-instructors/manage-classroom-instructors.component.html"),
        styles: [__webpack_require__(/*! ./manage-classroom-instructors.component.css */ "./src/app/pages/main/instructor/manage/manage-classroom-instructors/manage-classroom-instructors.component.css")]
    })
], ManageClassroomInstructorsComponent);



/***/ }),

/***/ "./src/app/pages/main/instructor/manage/manage-classroom-students/manage-classroom-students.component.css":
/*!****************************************************************************************************************!*\
  !*** ./src/app/pages/main/instructor/manage/manage-classroom-students/manage-classroom-students.component.css ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-card {\r\n  max-width: 400px;\r\n}\r\n\r\n.example-header-image {\r\n  background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');\r\n  background-size: cover;\r\n}\r\n\r\n.example-chip-list {\r\n  width: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9pbnN0cnVjdG9yL21hbmFnZS9tYW5hZ2UtY2xhc3Nyb29tLXN0dWRlbnRzL21hbmFnZS1jbGFzc3Jvb20tc3R1ZGVudHMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLG1GQUFtRjtFQUNuRixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9tYWluL2luc3RydWN0b3IvbWFuYWdlL21hbmFnZS1jbGFzc3Jvb20tc3R1ZGVudHMvbWFuYWdlLWNsYXNzcm9vbS1zdHVkZW50cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxuLmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJ2h0dHBzOi8vbWF0ZXJpYWwuYW5ndWxhci5pby9hc3NldHMvaW1nL2V4YW1wbGVzL3NoaWJhMS5qcGcnKTtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG59XHJcblxyXG4uZXhhbXBsZS1jaGlwLWxpc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/main/instructor/manage/manage-classroom-students/manage-classroom-students.component.ts":
/*!***************************************************************************************************************!*\
  !*** ./src/app/pages/main/instructor/manage/manage-classroom-students/manage-classroom-students.component.ts ***!
  \***************************************************************************************************************/
/*! exports provided: ManageClassroomStudentsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageClassroomStudentsComponent", function() { return ManageClassroomStudentsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _Shared_chosen_users_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../Shared/chosen-users.service */ "./src/app/Shared/chosen-users.service.ts");
/* harmony import */ var _Shared_api_manager_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../Shared/api-manager.service */ "./src/app/Shared/api-manager.service.ts");
/* harmony import */ var _Modals_StudentClassroomManagement_StudentClassroomManagementGetDataModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../../Modals/StudentClassroomManagement/StudentClassroomManagementGetDataModal */ "./src/app/Modals/StudentClassroomManagement/StudentClassroomManagementGetDataModal.ts");
var ManageClassroomStudentsComponent_1;






let ManageClassroomStudentsComponent = ManageClassroomStudentsComponent_1 = class ManageClassroomStudentsComponent {
    constructor(chosenStudents, snackBar, apiManagerService) {
        this.chosenStudents = chosenStudents;
        this.snackBar = snackBar;
        this.apiManagerService = apiManagerService;
        this.gotoHomePage = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.categoryName = 'Category not yet selected';
        this.currentCategoryId = '-2';
        this.categoryGroups = [];
        this.availableStudents = [];
    }
    ngOnInit() {
        this.chosenStudents.currentList.subscribe(updatedChosenStudentList => this.onStudentChosenChanged(updatedChosenStudentList));
        this.onInitUpdateExistingStudentsToChosenStudentsService();
        this.getDataFromApiListenerAndPoster();
    }
    getDataFromApiListenerAndPoster() {
        const api = this.apiManagerService.getManageClassroomData;
        const studentClassroomManagementGetData = new _Modals_StudentClassroomManagement_StudentClassroomManagementGetDataModal__WEBPACK_IMPORTED_MODULE_5__["StudentClassroomManagementGetDataModal"]('1', '1');
        this.apiManagerService.sendBControllerPostRequest(ManageClassroomStudentsComponent_1.name + '#GET', api, studentClassroomManagementGetData);
        this.apiCallSubscription = this.apiManagerService.onCallbackReceived.subscribe((callback) => {
            if (callback.topic === (ManageClassroomStudentsComponent_1.name + '#GET')) {
                this.getDataFromApiReceived(callback.data);
            }
            if (callback.topic === (ManageClassroomStudentsComponent_1.name + '#POST')) {
                this.getDataFromApiReceived(callback.data);
            }
        });
    }
    getDataFromApiReceived(data) {
        for (const row of data.response.result[0].result) {
            this.categoryGroups.push({
                categoryGroupID: row.organizational_category_group_id,
                categoryGroupName: row.organizational_category_group_name,
                category: []
            });
        }
        for (const row of data.response.result[1].result) {
            const indexOfParentCategoryGroup = this.getIndexOfCategoryGroupByCategoryGroupId(row.organizational_category_group_id, this.categoryGroups);
            this.categoryGroups[indexOfParentCategoryGroup].category.push({
                categoryId: row.organizational_category_id,
                categoryName: row.organizational_category_name
            });
        }
        for (const row of data.response.result[2].result) {
            this.availableStudents.push({
                firstName: row.first_name,
                lastName: row.last_name,
                userId: row.user_id,
                organizational_category_id: row.organizational_category_id,
                group_id: row.group_id,
                permanent_ban: row.permanent_ban,
                temporary_ban: row.temporary_ban
            });
        }
    }
    getIndexOfCategoryGroupByCategoryGroupId(searchElement, categoryGroups) {
        let index = -1;
        for (const categoryGroup of categoryGroups) {
            index += 1;
            if (categoryGroup.categoryGroupID === searchElement) {
                return index;
            }
        }
        return -1;
    }
    onStudentChosenChanged(updatedChosenStudentList) {
        this.selectedStudentIdsList = updatedChosenStudentList;
    }
    selectCategory(categoryId) {
        this.currentCategoryId = categoryId;
        this.selectableStudentList = this.getStudentsByCategory(categoryId);
        this.categoryGroups.forEach(categoryGroup => {
            categoryGroup.category.forEach(singleCategory => {
                if (singleCategory.categoryId === categoryId) {
                    this.categoryName = 'Showing ' + singleCategory.categoryName;
                    return;
                }
            });
        });
    }
    getStudentsByCategory(categoryId) {
        const selectableStudent = [];
        if (categoryId === '-2') {
            this.snackBarCreator('Choose a category first.');
            return;
        }
        if (categoryId === '-1') {
            // Returning all students
            for (const student of this.availableStudents) {
                let isSelected = false;
                if (student.group_id !== '-1') {
                    isSelected = true;
                }
                if (student.temporary_ban === '0' && student.permanent_ban === '0') {
                    selectableStudent.push({
                        selected: isSelected,
                        userId: student.userId,
                        fullName: student.firstName + ' ' + student.lastName,
                        profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
                    });
                }
            }
            return selectableStudent;
        }
        for (const student of this.availableStudents) {
            if (student.organizational_category_id === categoryId) {
                let isSelected = false;
                if (student.group_id !== '-1') {
                    isSelected = true;
                }
                if (student.temporary_ban === '0' && student.permanent_ban === '0') {
                    selectableStudent.push({
                        selected: isSelected,
                        userId: student.userId,
                        fullName: student.firstName + ' ' + student.lastName,
                        profilePicture: 'https://material.angular.io/assets/img/examples/shiba1.jpg'
                    });
                }
            }
        }
        return selectableStudent;
    }
    onInitUpdateExistingStudentsToChosenStudentsService() {
        // This means get all students across all categories
        const allStudents = this.getStudentsByCategory('-1');
        for (const student of allStudents) {
            if (student.selected) {
                this.chosenStudents.addToChosenUserList(student.userId);
            }
        }
    }
    selectAllStudentsOfCurrentCategoryId() {
        const selectableStudent = this.getStudentsByCategory(this.currentCategoryId);
        if (selectableStudent === undefined) {
            return;
        }
        for (const element of selectableStudent) {
            this.chosenStudents.addToChosenUserList(element.userId);
        }
    }
    unselectStudentsOfCurrentGroupId() {
        const selectableStudent = this.getStudentsByCategory(this.currentCategoryId);
        if (selectableStudent === undefined) {
            return;
        }
        for (const element of selectableStudent) {
            this.chosenStudents.removeFromChosenUserList(element.userId);
        }
    }
    updateSelectedStudents() {
        // todo api call => use selectedUserIdsList to remove every students connection and update with new list.
        this.chosenStudents.clearSlate();
        this.snackBarCreator('Student management updated successfully');
        this.gotoHomePage.emit();
    }
    snackBarCreator(message) {
        this.snackBar.open(message, 'Close', {
            duration: 1000,
        });
    }
};
ManageClassroomStudentsComponent.ctorParameters = () => [
    { type: _Shared_chosen_users_service__WEBPACK_IMPORTED_MODULE_3__["ChosenUsersService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] },
    { type: _Shared_api_manager_service__WEBPACK_IMPORTED_MODULE_4__["ApiManagerService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ManageClassroomStudentsComponent.prototype, "classroomId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], ManageClassroomStudentsComponent.prototype, "gotoHomePage", void 0);
ManageClassroomStudentsComponent = ManageClassroomStudentsComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-classroom-students',
        template: __webpack_require__(/*! raw-loader!./manage-classroom-students.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/instructor/manage/manage-classroom-students/manage-classroom-students.component.html"),
        styles: [__webpack_require__(/*! ./manage-classroom-students.component.css */ "./src/app/pages/main/instructor/manage/manage-classroom-students/manage-classroom-students.component.css")]
    })
], ManageClassroomStudentsComponent);



/***/ }),

/***/ "./src/app/pages/main/instructor/manage/select-user-element/select-user-element.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/main/instructor/manage/select-user-element/select-user-element.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vaW5zdHJ1Y3Rvci9tYW5hZ2Uvc2VsZWN0LXVzZXItZWxlbWVudC9zZWxlY3QtdXNlci1lbGVtZW50LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/pages/main/instructor/manage/select-user-element/select-user-element.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/main/instructor/manage/select-user-element/select-user-element.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SelectUserElementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectUserElementComponent", function() { return SelectUserElementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Shared_chosen_users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../Shared/chosen-users.service */ "./src/app/Shared/chosen-users.service.ts");



let SelectUserElementComponent = class SelectUserElementComponent {
    constructor(chosenUsers) {
        this.chosenUsers = chosenUsers;
    }
    ngOnInit() {
        this.chosenUsers.currentList.subscribe(updatedChosenUserList => this.chosenUsersChanged(updatedChosenUserList));
    }
    selectUser(isChecked) {
        if (!isChecked) {
            this.chosenUsers.removeFromChosenUserList(this.userId);
        }
        else {
            this.chosenUsers.addToChosenUserList(this.userId);
        }
    }
    chosenUsersChanged(updatedChosenUserList) {
        this.temp = '';
        this.selectedUserIdsList = updatedChosenUserList;
        this.selectedUserIdsList.forEach(value => this.temp += '|' + value);
        this.isChecked = this.selectedUserIdsList.indexOf(this.userId) !== -1;
    }
};
SelectUserElementComponent.ctorParameters = () => [
    { type: _Shared_chosen_users_service__WEBPACK_IMPORTED_MODULE_2__["ChosenUsersService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectUserElementComponent.prototype, "isChecked", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectUserElementComponent.prototype, "userId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectUserElementComponent.prototype, "userName", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SelectUserElementComponent.prototype, "userProfilePicture", void 0);
SelectUserElementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-select-user-element',
        template: __webpack_require__(/*! raw-loader!./select-user-element.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/instructor/manage/select-user-element/select-user-element.component.html"),
        styles: [__webpack_require__(/*! ./select-user-element.component.css */ "./src/app/pages/main/instructor/manage/select-user-element/select-user-element.component.css")]
    })
], SelectUserElementComponent);



/***/ }),

/***/ "./src/app/pages/main/main/main.component.css":
/*!****************************************************!*\
  !*** ./src/app/pages/main/main/main.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-style {\r\n  background-color: #EB1C61;\r\n  color: white;\r\n}\r\n\r\n#back-button{\r\n  cursor: pointer;\r\n}\r\n\r\n@media only screen and (max-width: 375px) {\r\n  .side-bar-responsive-status {\r\n    display: none;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9tYWluL21haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUF5QjtFQUN6QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0U7SUFDRSxhQUFhO0VBQ2Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vbWFpbi9tYWluLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbGJhci1zdHlsZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCMUM2MTtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbiNiYWNrLWJ1dHRvbntcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMzc1cHgpIHtcclxuICAuc2lkZS1iYXItcmVzcG9uc2l2ZS1zdGF0dXMge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/main/main/main.component.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/main/main/main.component.ts ***!
  \***************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let MainComponent = class MainComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        // Sign In Step ?
        this.isSignedIn = false;
        this.currentView = 'POSTS';
        this.screensWhereYouCannotLeaveWithoutConfirmingChanges = [
            'MANAGE_CLASSROOM_STUDENTS',
            'MANAGE_CLASSROOM_INSTRUCTORS'
        ];
    }
    onPostEnterListener(postId) {
        this.lastViewedPostId = postId;
        // Toggling currentView
        if (this.currentView !== 'SINGLE_POST') {
            this.snackBarCreator('Opening post #' + postId);
            this.currentView = 'SINGLE_POST';
        }
    }
    OnPostExitListener() {
        if (this.currentView === 'MANAGE_CLASSROOM_STUDENTS') {
            this.snackBarCreator('Finalize before switching screens.');
            return;
        }
        // Toggling currentView
        if (this.currentView !== 'POSTS') {
            this.snackBarCreator('Returning to all posts');
            this.currentView = 'POSTS';
        }
    }
    onWantToQuestion() {
        // Toggling currentView
        if (this.currentView !== 'ASK_A_QUESTION') {
            this.snackBarCreator('Go ahead and ask a question!');
            this.currentView = 'ASK_A_QUESTION';
        }
    }
    OnGotoAllPosts() {
        if (this.currentView !== 'POSTS') {
            this.currentView = 'POSTS';
        }
    }
    // utility functions
    snackBarCreator(message) {
        this.snackBar.open(message, 'Close', {
            duration: 1000,
        });
    }
    onSuccessfullySignedIn() {
        this.isSignedIn = true;
    }
    createNewClass() {
        if (this.canChangeScreen() === false) {
            return;
        }
        this.currentView = 'CREATE_A_CLASS';
        this.snackBarCreator('Entering Create New Class');
    }
    enterClass(classId) {
        if (this.canChangeScreen() === false) {
            return;
        }
        this.snackBarCreator('Entering Class ' + classId);
    }
    gotoScreenAddStudentsToClassroom() {
        if (this.canChangeScreen() === false) {
            return;
        }
        this.currentView = 'MANAGE_CLASSROOM_STUDENTS';
    }
    gotoManageStudentsOfCurrentClassroom() {
        if (this.canChangeScreen() === false) {
            return;
        }
        this.currentView = 'MANAGE_CLASSROOM_STUDENTS';
    }
    gotoManageInstructorsOfCurrentChosenClassroom() {
        if (this.canChangeScreen() === false) {
            return;
        }
        this.currentView = 'MANAGE_CLASSROOM_INSTRUCTORS';
    }
    canChangeScreen() {
        for (const screen of this.screensWhereYouCannotLeaveWithoutConfirmingChanges) {
            if (this.currentView === screen) {
                this.snackBarCreator('Finalize before switching screens.');
                return false;
            }
        }
        return true;
    }
};
MainComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-alt-main',
        template: __webpack_require__(/*! raw-loader!./main.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/main/main.component.html"),
        styles: [__webpack_require__(/*! ./main.component.css */ "./src/app/pages/main/main/main.component.css")]
    })
], MainComponent);



/***/ }),

/***/ "./src/app/pages/main/post-question/post-question.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/pages/main/post-question/post-question.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inline-elements{\r\n  display: flex;\r\n}\r\n\r\n.inline-element-margin-left{\r\n  margin-left: 50px;\r\n}\r\n\r\n.inline-element-margin-left-2{\r\n  margin-left: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9wb3N0LXF1ZXN0aW9uL3Bvc3QtcXVlc3Rpb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vcG9zdC1xdWVzdGlvbi9wb3N0LXF1ZXN0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5saW5lLWVsZW1lbnRze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pbmxpbmUtZWxlbWVudC1tYXJnaW4tbGVmdHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmlubGluZS1lbGVtZW50LW1hcmdpbi1sZWZ0LTJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/main/post-question/post-question.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/pages/main/post-question/post-question.component.ts ***!
  \*********************************************************************/
/*! exports provided: PostQuestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostQuestionComponent", function() { return PostQuestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let PostQuestionComponent = class PostQuestionComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.selectedTagId = -1;
        this.selectedGroupIdToPost = 1;
        this.selectedAnonymityScopeId = 1;
        this.htmlContent = 'Content';
        this.defaultAnonymityScope = '1';
        this.anonymityScope = [
            { id: '0', viewValue: 'Anonymous' },
            { id: '1', viewValue: 'Rahul Ravindran' },
        ];
        this.defaultGroup = '1';
        this.classes = [
            { id: '1',
                viewValue: 'MAT 102',
                tags: [
                    { tagName: 'PS1', id: '1' },
                    { tagName: 'PS2', id: '2' },
                    { tagName: 'PS3', id: '3' },
                    { tagName: 'Generic', id: '4' },
                ]
            },
            {
                id: '2',
                viewValue: 'CSC 108',
                tags: [
                    { tagName: 'Assignment 1', id: '5' },
                    { tagName: 'Codebase', id: '6' },
                    { tagName: 'Assignment 2', id: '7' },
                    { tagName: 'Generic', id: '8' },
                ]
            },
            {
                id: '3',
                viewValue: 'MAT 135',
                tags: [
                    { tagName: 'Online Assignment 1', id: '9' },
                    { tagName: 'Online Assignment 2', id: '10' },
                    { tagName: 'Test 1', id: '11' },
                    { tagName: 'Generic', id: '12' },
                ]
            },
        ];
    }
    onSelectionChangedAnonymityLevel($event) {
        this.selectedAnonymityScopeId = $event.value;
        this.showSnackbarMessage('You will be posting as ' + this.getAnonymityScopeNameFromChosenAnonymityScopeId());
    }
    onSelectionChangedGroup($event) {
        this.selectedGroupIdToPost = $event.value;
        // Resetting Tag because tag corresponds to a particular class
        this.selectedTagId = -1;
        this.showSnackbarMessage('You will be posting to ' + this.getClassNameFromChosenClassId());
    }
    onTagChangedGroup($event) {
        this.selectedTagId = $event.value;
        console.log($event.value);
        this.showSnackbarMessage('Changed Tag to ' + this.getTagNameFromChosenTagId());
    }
    postQuestion() {
        this.showSnackbarMessage('PSEUDO POST QUESTION' + '\n' +
            'HTML Content: ' + this.htmlContent + '\n' +
            'Class: ' + this.getClassNameFromChosenClassId() + '\n' +
            'Anonymity Level: ' + this.getAnonymityScopeNameFromChosenAnonymityScopeId() + '\n' +
            'Tag: ' + this.getTagNameFromChosenTagId());
    }
    saveDraft() {
        this.showSnackbarMessage('PSEUDO SAVE DRAFT' + '\n' +
            'HTML Content: ' + this.htmlContent + '\n' +
            'Class: ' + this.getClassNameFromChosenClassId() + '\n' +
            'Anonymity Level: ' + this.getAnonymityScopeNameFromChosenAnonymityScopeId() + '\n' +
            'Tag: ' + this.getTagNameFromChosenTagId());
    }
    // Utility functions
    getClassNameFromChosenClassId() {
        for (const aClass of this.classes) {
            if (aClass.id === this.selectedGroupIdToPost.toString()) {
                return aClass.viewValue;
            }
        }
    }
    getTagNameFromChosenTagId() {
        for (const aClass of this.classes) {
            for (const tag of aClass.tags) {
                if (tag.id === this.selectedTagId.toString()) {
                    return tag.tagName;
                }
            }
        }
    }
    getAnonymityScopeNameFromChosenAnonymityScopeId() {
        for (const anonymityScope of this.anonymityScope) {
            if (anonymityScope.id === this.selectedAnonymityScopeId.toString()) {
                return anonymityScope.viewValue;
            }
        }
    }
    getTagsOfAChosenClass() {
        for (const aClass of this.classes) {
            if (aClass.id === this.selectedGroupIdToPost.toString()) {
                return aClass.tags;
            }
        }
    }
    showSnackbarMessage(message) {
        this.snackBar.open(message, 'Close', {
            duration: 2000,
        });
    }
};
PostQuestionComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostQuestionComponent.prototype, "selectedTagId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostQuestionComponent.prototype, "selectedGroupIdToPost", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostQuestionComponent.prototype, "selectedAnonymityScopeId", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], PostQuestionComponent.prototype, "htmlContent", void 0);
PostQuestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-post-question',
        template: __webpack_require__(/*! raw-loader!./post-question.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/post-question/post-question.component.html"),
        styles: [__webpack_require__(/*! ./post-question.component.css */ "./src/app/pages/main/post-question/post-question.component.css")]
    })
], PostQuestionComponent);



/***/ }),

/***/ "./src/app/pages/main/search-and-filters/search-and-filters.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/pages/main/search-and-filters/search-and-filters.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".match-parent-width-modified {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 100%;\r\n}\r\n\r\n.match-parent-width-modified-2 {\r\n  display: flex;\r\n  flex-direction: column;\r\n  width: 650px;\r\n}\r\n\r\n.flex-item-grow{\r\n  flex-grow: 1;\r\n}\r\n\r\n.split-3-divs-equally {\r\n  margin-top: -25px;\r\n  display: flex;\r\n}\r\n\r\n.three-elements{\r\n  margin-top: -35px;\r\n  display: flex;\r\n}\r\n\r\n.awesome-select{\r\n  border: 1px solid rgba(60, 64, 67, 0.22);\r\n  border-radius: 4px;\r\n  text-underline: none;\r\n}\r\n\r\n.left-margin-select{\r\n  margin-left: 30px;\r\n}\r\n\r\n::ng-deep .remove-underline .mat-form-field-underline {\r\n  display: none;\r\n}\r\n\r\n.default-padding {\r\n  padding: 8px;\r\n}\r\n\r\n.AAQ-margin {\r\n  margin-top: 20px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9zZWFyY2gtYW5kLWZpbHRlcnMvc2VhcmNoLWFuZC1maWx0ZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLG9CQUFvQjtBQUN0Qjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vc2VhcmNoLWFuZC1maWx0ZXJzL3NlYXJjaC1hbmQtZmlsdGVycy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdGNoLXBhcmVudC13aWR0aC1tb2RpZmllZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0Y2gtcGFyZW50LXdpZHRoLW1vZGlmaWVkLTIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB3aWR0aDogNjUwcHg7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW0tZ3Jvd3tcclxuICBmbGV4LWdyb3c6IDE7XHJcbn1cclxuXHJcbi5zcGxpdC0zLWRpdnMtZXF1YWxseSB7XHJcbiAgbWFyZ2luLXRvcDogLTI1cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLnRocmVlLWVsZW1lbnRze1xyXG4gIG1hcmdpbi10b3A6IC0zNXB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hd2Vzb21lLXNlbGVjdHtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDYwLCA2NCwgNjcsIDAuMjIpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICB0ZXh0LXVuZGVybGluZTogbm9uZTtcclxufVxyXG5cclxuLmxlZnQtbWFyZ2luLXNlbGVjdHtcclxuICBtYXJnaW4tbGVmdDogMzBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5yZW1vdmUtdW5kZXJsaW5lIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi5kZWZhdWx0LXBhZGRpbmcge1xyXG4gIHBhZGRpbmc6IDhweDtcclxufVxyXG5cclxuLkFBUS1tYXJnaW4ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/pages/main/search-and-filters/search-and-filters.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/pages/main/search-and-filters/search-and-filters.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SearchAndFiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchAndFiltersComponent", function() { return SearchAndFiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let SearchAndFiltersComponent = class SearchAndFiltersComponent {
    constructor() {
        this.askAQuestion = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.defaultSortType = 'TIME-ASCENDING';
        this.sortType = [
            { value: 'UPVOTES', viewValue: 'Upvotes' },
            { value: 'TIME-ASCENDING', viewValue: 'Latest' },
            { value: 'TIME-DESCENDING', viewValue: 'Oldest' }
        ];
        this.defaultPostType = 'UNREAD';
        this.postType = [
            { value: 'READ', viewValue: 'Read' },
            { value: 'UNREAD', viewValue: 'Unread' },
            { value: 'ALL', viewValue: 'All' }
        ];
    }
    emitAskAQuestionEvent() {
        this.askAQuestion.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SearchAndFiltersComponent.prototype, "askAQuestion", void 0);
SearchAndFiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-search-and-filters',
        template: __webpack_require__(/*! raw-loader!./search-and-filters.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/search-and-filters/search-and-filters.component.html"),
        styles: [__webpack_require__(/*! ./search-and-filters.component.css */ "./src/app/pages/main/search-and-filters/search-and-filters.component.css")]
    })
], SearchAndFiltersComponent);



/***/ }),

/***/ "./src/app/pages/main/single-question-with-answers/single-question-with-answers.component.css":
/*!****************************************************************************************************!*\
  !*** ./src/app/pages/main/single-question-with-answers/single-question-with-answers.component.css ***!
  \****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".inline-elements{\r\n  display: flex;\r\n}\r\n\r\n.inline-element-margin-left{\r\n  margin-left: 50px;\r\n}\r\n\r\n.inline-element-margin-left-2{\r\n  margin-left: 20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbWFpbi9zaW5nbGUtcXVlc3Rpb24td2l0aC1hbnN3ZXJzL3NpbmdsZS1xdWVzdGlvbi13aXRoLWFuc3dlcnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21haW4vc2luZ2xlLXF1ZXN0aW9uLXdpdGgtYW5zd2Vycy9zaW5nbGUtcXVlc3Rpb24td2l0aC1hbnN3ZXJzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5saW5lLWVsZW1lbnRze1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5pbmxpbmUtZWxlbWVudC1tYXJnaW4tbGVmdHtcclxuICBtYXJnaW4tbGVmdDogNTBweDtcclxufVxyXG5cclxuLmlubGluZS1lbGVtZW50LW1hcmdpbi1sZWZ0LTJ7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/main/single-question-with-answers/single-question-with-answers.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/pages/main/single-question-with-answers/single-question-with-answers.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: SingleQuestionWithAnswersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleQuestionWithAnswersComponent", function() { return SingleQuestionWithAnswersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let SingleQuestionWithAnswersComponent = class SingleQuestionWithAnswersComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.selectedAnonymityScopeId = 1;
        this.defaultAnonymityScope = '1';
        this.anonymityScope = [
            { id: '0', viewValue: 'Anonymous' },
            { id: '1', viewValue: 'Rahul Ravindran' },
        ];
        this.theQuestion = {
            postId: 1,
            upvoted: false,
            author: 'Rahul Ravindran',
            lastActive: '8 hours ago',
            profilePictureUrl: '',
            question: 'Why is the Sun yellow?',
            replyCount: 20,
            tag: 'Geo Quiz 2',
            upvoteCount: 38487,
            flagged: false
        };
        this.showAnswerBar = false;
    }
    onSelectionChangedAnonymityLevel($event) {
        this.selectedAnonymityScopeId = $event.value;
        this.showSnackbarMessage('You will be posting as ' + this.getAnonymityScopeNameFromChosenAnonymityScopeId());
    }
    getAnonymityScopeNameFromChosenAnonymityScopeId() {
        for (const anonymityScope of this.anonymityScope) {
            if (anonymityScope.id === this.selectedAnonymityScopeId.toString()) {
                return anonymityScope.viewValue;
            }
        }
    }
    showSnackbarMessage(message) {
        this.snackBar.open(message, 'Close', {
            duration: 2000,
        });
    }
    postAnswer() {
        this.showSnackbarMessage('PSEUDO POST QUESTION' + '\n' +
            'HTML Content: ' + this.htmlContent + '\n' +
            'Anonymity Level: ' + this.getAnonymityScopeNameFromChosenAnonymityScopeId() + '\n');
    }
    toggleShowAnswerBar() {
        this.showAnswerBar = !this.showAnswerBar;
    }
};
SingleQuestionWithAnswersComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], SingleQuestionWithAnswersComponent.prototype, "postId", void 0);
SingleQuestionWithAnswersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-single-question-with-answers',
        template: __webpack_require__(/*! raw-loader!./single-question-with-answers.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/main/single-question-with-answers/single-question-with-answers.component.html"),
        styles: [__webpack_require__(/*! ./single-question-with-answers.component.css */ "./src/app/pages/main/single-question-with-answers/single-question-with-answers.component.css")]
    })
], SingleQuestionWithAnswersComponent);



/***/ }),

/***/ "./src/app/pages/sidebar/sidebar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/sidebar/sidebar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#coloured-box{\r\n  padding: 10px;\r\n}\r\n\r\n#profile-picture{\r\n\r\n}\r\n\r\n.rounded-picture {\r\n  border-radius: 50%;\r\n  max-height: 80px;\r\n  max-width: 80px;\r\n}\r\n\r\n#text-1{\r\n  margin-top: 5px;\r\n  color: white;\r\n}\r\n\r\n#text-2{\r\n  margin-top: 5px;\r\n  color: white;\r\n}\r\n\r\n.mat-list-icon {\r\n  color: rgba(0, 0, 0, 0.54);\r\n}\r\n\r\nmat-list-item:hover {\r\n  cursor: pointer;\r\n  background: rgba(185, 184, 194, 0.48);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7O0FBRUE7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixxQ0FBcUM7QUFDdkMiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb2xvdXJlZC1ib3h7XHJcbiAgcGFkZGluZzogMTBweDtcclxufVxyXG5cclxuI3Byb2ZpbGUtcGljdHVyZXtcclxuXHJcbn1cclxuXHJcbi5yb3VuZGVkLXBpY3R1cmUge1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBtYXgtaGVpZ2h0OiA4MHB4O1xyXG4gIG1heC13aWR0aDogODBweDtcclxufVxyXG5cclxuI3RleHQtMXtcclxuICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4jdGV4dC0ye1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbn1cclxuXHJcbi5tYXQtbGlzdC1pY29uIHtcclxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcclxufVxyXG5cclxubWF0LWxpc3QtaXRlbTpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMTg1LCAxODQsIDE5NCwgMC40OCk7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/pages/sidebar/sidebar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/sidebar/sidebar.component.ts ***!
  \****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");



let SidebarComponent = class SidebarComponent {
    constructor(snackBar) {
        this.snackBar = snackBar;
        this.WantToCreateANewClass = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.EnterClass = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.classes = [
            {
                name: 'MAT 102',
                lastActivity: new Date('1/1/16'),
            },
            {
                name: 'CSC 108',
                lastActivity: new Date('1/17/16'),
            },
            {
                name: 'MAT 135',
                lastActivity: new Date('1/28/16'),
            }
        ];
    }
    openSnackBar(groupName) {
        this.snackBar.open('Entering ' + groupName, 'Close', {
            duration: 2000,
        });
    }
    emitWantToCreateANewClass() {
        this.WantToCreateANewClass.emit();
    }
    emitEnterClass(classId) {
        this.EnterClass.emit(classId);
    }
};
SidebarComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidebarComponent.prototype, "WantToCreateANewClass", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], SidebarComponent.prototype, "EnterClass", void 0);
SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-sidebar',
        template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/pages/sidebar/sidebar.component.html"),
        styles: [__webpack_require__(/*! ./sidebar.component.css */ "./src/app/pages/sidebar/sidebar.component.css")]
    })
], SidebarComponent);



/***/ }),

/***/ "./src/app/utility/shiny-text/shiny-text.component.css":
/*!*************************************************************!*\
  !*** ./src/app/utility/shiny-text/shiny-text.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* For The Shiny Effect*/\r\n\r\n.shiny\r\n{\r\n  color: #F5C21B;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(#F5C21B), to(#D17000));\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  display: inline-block;\r\n  font-family: \"Source Sans Pro\", sans-serif;\r\n  /*font-size: 15px;*/\r\n  font-weight: 900;\r\n  position: relative;\r\n  text-transform: uppercase;\r\n}\r\n\r\n.shiny::before\r\n{\r\n  background-position: -180px;\r\n  -webkit-animation: flare 15s infinite;\r\n  -webkit-animation-timing-function: linear;\r\n  background-image: linear-gradient(65deg, transparent 20%, rgba(255, 255, 255, 0.2) 20%, rgba(255, 255, 255, 0.3) 27%, transparent 27%, transparent 100%);\r\n  -webkit-background-clip: text;\r\n  -webkit-text-fill-color: transparent;\r\n  content: \"Shiny\";\r\n  color: #FFF;\r\n  display: block;\r\n  padding-right: 140px;\r\n  position: absolute;\r\n}\r\n\r\n.shiny::after\r\n{\r\n  content: \"Shiny\";\r\n  color: #FFF;\r\n  display: block;\r\n  position: absolute;\r\n  text-shadow: 0 1px #6E4414, 0 2px #6E4414, 0 3px #6E4414, 0 4px #6E4414, 0 5px #6E4414, 0 6px #6E4414, 0 7px #6E4414, 0 8px #6E4414, 0 9px #6E4414, 0 10px #6E4414;\r\n  top: 0;\r\n  z-index: -1;\r\n}\r\n\r\n.inner-shiny::after, .inner-shiny::before\r\n{\r\n  -webkit-animation: sparkle 15s infinite;\r\n  -webkit-animation-timing-function: linear;\r\n  background: #FFF;\r\n  border-radius: 100%;\r\n  box-shadow: 0 0 5px #FFF, 0 0 10px #FFF, 0 0 15px #FFF, 0 0 20px #FFF, 0 0 25px #FFF, 0 0 30px #FFF, 0 0 35px #FFF;\r\n  content: \"\";\r\n  display: block;\r\n  height: 10px;\r\n  opacity: 0.7;\r\n  position: absolute;\r\n  width: 10px;\r\n}\r\n\r\n.inner-shiny::before\r\n{\r\n  -webkit-animation-delay: .1s;\r\n  height: 7px;\r\n  left: 0.12em;\r\n  top: 0.8em;\r\n  width: 7px;\r\n}\r\n\r\n.inner-shiny::after\r\n{\r\n  top: 0.32em;\r\n  right: -5px;\r\n}\r\n\r\n@-webkit-keyframes flare\r\n{\r\n  0%   { background-position: -180px; }\r\n  30%  { background-position: 500px; }\r\n  100% { background-position: 500px; }\r\n}\r\n\r\n@-webkit-keyframes sparkle\r\n{\r\n  0%   { opacity: 0; }\r\n  30%  { opacity: 0; }\r\n  40%  { opacity: 0.8; }\r\n  60%  { opacity: 0; }\r\n  100% { opacity: 0; }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbGl0eS9zaGlueS10ZXh0L3NoaW55LXRleHQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3QkFBd0I7O0FBRXhCOztFQUVFLGNBQWM7RUFDZCx1RkFBdUY7RUFDdkYsNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxxQkFBcUI7RUFDckIsMENBQTBDO0VBQzFDLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLHlCQUF5QjtBQUMzQjs7QUFFQTs7RUFFRSwyQkFBMkI7RUFDM0IscUNBQXFDO0VBQ3JDLHlDQUF5QztFQUN6Qyx3SkFBd0o7RUFDeEosNkJBQTZCO0VBQzdCLG9DQUFvQztFQUNwQyxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBOztFQUVFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrS0FBa0s7RUFDbEssTUFBTTtFQUNOLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSx1Q0FBdUM7RUFDdkMseUNBQXlDO0VBQ3pDLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsa0hBQWtIO0VBQ2xILFdBQVc7RUFDWCxjQUFjO0VBQ2QsWUFBWTtFQUNaLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBOztFQUVFLDRCQUE0QjtFQUM1QixXQUFXO0VBQ1gsWUFBWTtFQUNaLFVBQVU7RUFDVixVQUFVO0FBQ1o7O0FBRUE7O0VBRUUsV0FBVztFQUNYLFdBQVc7QUFDYjs7QUFFQTs7RUFFRSxPQUFPLDJCQUEyQixFQUFFO0VBQ3BDLE9BQU8sMEJBQTBCLEVBQUU7RUFDbkMsT0FBTywwQkFBMEIsRUFBRTtBQUNyQzs7QUFFQTs7RUFFRSxPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFlBQVksRUFBRTtFQUNyQixPQUFPLFVBQVUsRUFBRTtFQUNuQixPQUFPLFVBQVUsRUFBRTtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL3V0aWxpdHkvc2hpbnktdGV4dC9zaGlueS10ZXh0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBGb3IgVGhlIFNoaW55IEVmZmVjdCovXHJcblxyXG4uc2hpbnlcclxue1xyXG4gIGNvbG9yOiAjRjVDMjFCO1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtZ3JhZGllbnQobGluZWFyLCBsZWZ0IHRvcCwgbGVmdCBib3R0b20sIGZyb20oI0Y1QzIxQiksIHRvKCNEMTcwMDApKTtcclxuICAtd2Via2l0LWJhY2tncm91bmQtY2xpcDogdGV4dDtcclxuICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtZmFtaWx5OiBcIlNvdXJjZSBTYW5zIFByb1wiLCBzYW5zLXNlcmlmO1xyXG4gIC8qZm9udC1zaXplOiAxNXB4OyovXHJcbiAgZm9udC13ZWlnaHQ6IDkwMDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxufVxyXG5cclxuLnNoaW55OjpiZWZvcmVcclxue1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IC0xODBweDtcclxuICAtd2Via2l0LWFuaW1hdGlvbjogZmxhcmUgMTVzIGluZmluaXRlO1xyXG4gIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogbGluZWFyO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg2NWRlZywgdHJhbnNwYXJlbnQgMjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMikgMjAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMykgMjclLCB0cmFuc3BhcmVudCAyNyUsIHRyYW5zcGFyZW50IDEwMCUpO1xyXG4gIC13ZWJraXQtYmFja2dyb3VuZC1jbGlwOiB0ZXh0O1xyXG4gIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICBjb250ZW50OiBcIlNoaW55XCI7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcGFkZGluZy1yaWdodDogMTQwcHg7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG59XHJcblxyXG4uc2hpbnk6OmFmdGVyXHJcbntcclxuICBjb250ZW50OiBcIlNoaW55XCI7XHJcbiAgY29sb3I6ICNGRkY7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRleHQtc2hhZG93OiAwIDFweCAjNkU0NDE0LCAwIDJweCAjNkU0NDE0LCAwIDNweCAjNkU0NDE0LCAwIDRweCAjNkU0NDE0LCAwIDVweCAjNkU0NDE0LCAwIDZweCAjNkU0NDE0LCAwIDdweCAjNkU0NDE0LCAwIDhweCAjNkU0NDE0LCAwIDlweCAjNkU0NDE0LCAwIDEwcHggIzZFNDQxNDtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogLTE7XHJcbn1cclxuXHJcbi5pbm5lci1zaGlueTo6YWZ0ZXIsIC5pbm5lci1zaGlueTo6YmVmb3JlXHJcbntcclxuICAtd2Via2l0LWFuaW1hdGlvbjogc3BhcmtsZSAxNXMgaW5maW5pdGU7XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBsaW5lYXI7XHJcbiAgYmFja2dyb3VuZDogI0ZGRjtcclxuICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggI0ZGRiwgMCAwIDEwcHggI0ZGRiwgMCAwIDE1cHggI0ZGRiwgMCAwIDIwcHggI0ZGRiwgMCAwIDI1cHggI0ZGRiwgMCAwIDMwcHggI0ZGRiwgMCAwIDM1cHggI0ZGRjtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGhlaWdodDogMTBweDtcclxuICBvcGFjaXR5OiAwLjc7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHdpZHRoOiAxMHB4O1xyXG59XHJcblxyXG4uaW5uZXItc2hpbnk6OmJlZm9yZVxyXG57XHJcbiAgLXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IC4xcztcclxuICBoZWlnaHQ6IDdweDtcclxuICBsZWZ0OiAwLjEyZW07XHJcbiAgdG9wOiAwLjhlbTtcclxuICB3aWR0aDogN3B4O1xyXG59XHJcblxyXG4uaW5uZXItc2hpbnk6OmFmdGVyXHJcbntcclxuICB0b3A6IDAuMzJlbTtcclxuICByaWdodDogLTVweDtcclxufVxyXG5cclxuQC13ZWJraXQta2V5ZnJhbWVzIGZsYXJlXHJcbntcclxuICAwJSAgIHsgYmFja2dyb3VuZC1wb3NpdGlvbjogLTE4MHB4OyB9XHJcbiAgMzAlICB7IGJhY2tncm91bmQtcG9zaXRpb246IDUwMHB4OyB9XHJcbiAgMTAwJSB7IGJhY2tncm91bmQtcG9zaXRpb246IDUwMHB4OyB9XHJcbn1cclxuXHJcbkAtd2Via2l0LWtleWZyYW1lcyBzcGFya2xlXHJcbntcclxuICAwJSAgIHsgb3BhY2l0eTogMDsgfVxyXG4gIDMwJSAgeyBvcGFjaXR5OiAwOyB9XHJcbiAgNDAlICB7IG9wYWNpdHk6IDAuODsgfVxyXG4gIDYwJSAgeyBvcGFjaXR5OiAwOyB9XHJcbiAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/utility/shiny-text/shiny-text.component.ts":
/*!************************************************************!*\
  !*** ./src/app/utility/shiny-text/shiny-text.component.ts ***!
  \************************************************************/
/*! exports provided: ShinyTextComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShinyTextComponent", function() { return ShinyTextComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ShinyTextComponent = class ShinyTextComponent {
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShinyTextComponent.prototype, "value", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ShinyTextComponent.prototype, "fontSize", void 0);
ShinyTextComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-shiny-text',
        template: __webpack_require__(/*! raw-loader!./shiny-text.component.html */ "./node_modules/raw-loader/index.js!./src/app/utility/shiny-text/shiny-text.component.html"),
        styles: [__webpack_require__(/*! ./shiny-text.component.css */ "./src/app/utility/shiny-text/shiny-text.component.css")]
    })
], ShinyTextComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Spizen\Projects\Eduflow.io\Code\Angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map