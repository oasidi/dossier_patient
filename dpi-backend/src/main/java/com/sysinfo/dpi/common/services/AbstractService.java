package com.sysinfo.dpi.common.services;

import java.util.List;

/**
 * @author Ali Bouali
 * @since 18.04.22
 */
public interface AbstractService<T> {

  Integer save(T dto);

  T findById(Integer id);

  List<T> findAll();

  void delete(Integer id);
}
