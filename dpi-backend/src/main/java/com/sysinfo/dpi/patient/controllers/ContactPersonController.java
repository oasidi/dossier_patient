package com.sysinfo.dpi.patient.controllers;

import static com.sysinfo.dpi.patient.utils.Routes.CONTACT_PERSON_ROUTE;

import com.sysinfo.dpi.patient.dto.ContactPersonDto;
import com.sysinfo.dpi.patient.services.ContactPersonService;
import io.swagger.annotations.Api;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * @author Ali Bouali
 * @since 30.04.22
 */
@RestController
@RequestMapping(CONTACT_PERSON_ROUTE)
@RequiredArgsConstructor
@Api("Contact-Person")
public class ContactPersonController {

  private final ContactPersonService service;

  @PostMapping("/")
  public ResponseEntity<Integer> save(
      @RequestBody ContactPersonDto contactPerson
  ) {
    return ResponseEntity.ok(service.save(contactPerson));
  }

  @GetMapping("/{contactPersonId}")
  public ResponseEntity<ContactPersonDto> findById(
      @PathVariable("contactPersonId") Integer contactPersonId
  ) {
    return ResponseEntity.ok(service.findById(contactPersonId));
  }

  @DeleteMapping("/{contactPersonId}")
  public ResponseEntity<String> delete(
      @PathVariable("contactPersonId") Integer contactPersonId
  ) {
    service.delete(contactPersonId);
    return ResponseEntity.ok("deleted");
  }

}
